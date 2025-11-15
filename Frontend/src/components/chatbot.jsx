import React, { useState, useRef, useEffect } from "react";
import { Send, Bot } from "lucide-react";
import { marked } from "marked";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // Track “Thinking...” state
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true); // Start loading

    // Show temporary “Thinking...” message
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "Thinking..." },
    ]);

    try {
      const res = await fetch("https://fateen-portfolio-ai.vercel.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setLoading(false);

      setMessages((prev) => {
        // remove last "Thinking..." and replace it with actual reply
        const updated = [...prev];
        updated.pop();
        return [
          ...updated,
          { sender: "bot", text: data.reply || "No response" },
        ];
      });
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMessages((prev) => {
        const updated = [...prev];
        updated.pop();
        return [
          ...updated,
          { sender: "bot", text: "Error connecting to AI." },
        ];
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-black from-[#f0f6ff] to-[#e4ecff] flex items-start justify-center py-16 px-3" style={{ marginTop: "60px" }}>
      <div className="w-full max-w-md sm:max-w-2xl md:max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
        <div className="flex items-center gap-3 px-5 py-4 sm:py-6 border-b border-gray-100">
          <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
            <Bot className="text-blue-600 w-7 h-7 sm:w-6 sm:h-6" />
          </div>
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
            Chat with <span className="text-blue-600">Skillset AI</span>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 px-4 sm:px-6 py-5 bg-gray-50"
          style={{
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          <div className="flex flex-col gap-3">
            {messages.length === 0 && (
              <p className="text-sm text-gray-500 text-center mt-10 sm:mt-16 px-6">
                👋 Start a conversation to learn more with Mohamed Fateen.
              </p>
            )}

            {messages.map((msg, i) => (
  <div
  key={i}
  className={`max-w-[74%] w-auto p-3 rounded-2xl text-[15px] sm:text-base leading-relaxed break-words overflow-auto ${
    msg.sender === "user"
      ? "bg-blue-600 text-white self-end ml-auto"
      : "bg-gray-200 text-gray-800 self-start"
  } ${msg.text === "Thinking..." ? "text-gray-100 italic font-bold" : ""}`}
  style={{ wordBreak: "break-word" }} // extra safety for HTML messages
  dangerouslySetInnerHTML={{
    __html: marked(msg.text, { breaks: true }),
  }}
/>
))}

            <div className="h-24 sm:hidden" />
          </div>
        </div>

        <div className="px-4 sm:px-6 py-4 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
              aria-label="Send message"
              disabled={loading} // Prevent multiple sends
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
