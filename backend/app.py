from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage,SystemMessage
from dotenv import load_dotenv
load_dotenv()

google_api_key = os.getenv("GOOGLE_API_KEY")

app = Flask(__name__)
CORS(app)  # allows requests from your React app

# Initialize LLM (replace with your API key)
llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash",google_api_key=google_api_key)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "")

    # Build prompt or conversation
    messages = [
        SystemMessage(content="You are an helpful AI coding and general purpose assistant. If anyone asks about Mohamed Fateen that is me, then say that he is the creator of this website . An additional information about me is that is know Machine learning, deep learning, scikit-learn, OpenCV, Pydantic, LangChain (prompts, messages, parsers, chains), RAG, fine-tuning, AI deployment, DevOps, AWS, Azure, Postman, WordPress, Gamma AI, Manus AI, Anthropic (Claude), Python, React, responsive design, Flask, FastAPI, app development, VR (Meta Quest), integration, calculus, Notion, Google Colab."),
        HumanMessage(content=user_input)
    ]

    # Get LLM response
    response = llm.invoke(messages)
    answer = response.content

    return jsonify({"reply": answer})

if __name__ == "__main__":
    app.run(debug=True)
