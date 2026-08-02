import { useState } from "react";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) 
      {
        alert("Please enter a question.");
        return;
      }

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://kisan-sarthi-ai.onrender.com/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: question,
        }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("Unable to contact the AI server. please try again later.");
    }

    setLoading(false);
  };

  return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-6">

    <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

      <h1 className="text-4xl font-bold text-center mb-6 text-green-700">
        🌱 Kisan Sarthi AI Assistant
      </h1>

      <textarea
        rows="5"
        placeholder="Ask your agriculture question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
      />

      <button
        onClick={askAI}
        disabled={loading}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {loading && (
        <div className="mt-6 text-center text-blue-600">
          <p>🌾 AI is analyzing your question...</p>
        </div>
      )}

      {response && (
        <div className="mt-6 bg-green-50 dark:bg-gray-700 border border-green-300 rounded-lg p-5">
          <h2 className="text-xl font-bold mb-3 text-green-700">
            AI Response
          </h2>

          <p className="whitespace-pre-line text-gray-800 dark:text-white">
            {response}
          </p>
        </div>
      )}

    </div>

  </div>
);
}
export default AIChat;