import { useState } from "react";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/ai/chat", {
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
      setResponse("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Kisan Sarthi AI Chat</h2>

      <textarea
        rows="5"
        cols="60"
        placeholder="Ask your agriculture question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <button onClick={askAI}>
        Ask AI
      </button>

      <br /><br />

      {loading && <p>Loading...</p>}

      {response && (
        <div>
          <h3>Response</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default AIChat;