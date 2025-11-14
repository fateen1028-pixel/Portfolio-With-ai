from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage

# Vercel loads env variables automatically
google_api_key = os.getenv("GOOGLE_API_KEY")

app = Flask(__name__)
CORS(app)

# Initialize LLM
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=google_api_key
)

# simple in-memory chat history (resets every deployment)
chat_history = []

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "")

    chat_history.append(HumanMessage(content=user_input))

    system_prompt = SystemMessage(
        content=(
            "You are a helpful AI coding assistant. "
            "If someone asks you about the creator of this website, the creator is F. Mohamed Fateen. "
            "Additional skills include: Python, JavaScript, C, Git, Linux CLI, Scikit-learn, Linear Regression, "
            "Logistic Regression, Machine Learning, Deep Learning basics, LangChain, RAG, Fine-tuning, Pydantic, OpenCV, "
            "React, Frontend Development, Responsive Design, Flask, Streamlit, FastAPI (concepts), Postman, WordPress, "
            "Gamma AI, Manus AI, Anthropic, AWS, Azure, AI Deployment, DevOps, App Development, VR (Meta Quest), "
            "Notion, Google Colab, Integration, Calculus."
        )
    )

    # LLM response
    response = llm.invoke([system_prompt] + chat_history)

    chat_history.append(response)

    return jsonify({"reply": response.content})


# Required by Vercel (serverless handler)
def handler(event, context):
    return app(event, context)


# For local development only
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
