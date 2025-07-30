import { useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ".split("");

function App() {
  const [text, setText] = useState("");

  const addLetter = (letter: string) => {
    setText((prev) => prev + letter.toLowerCase());
  };

  const speak = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">📝 Lerne Schreiben</h1>

      <input
        className="text-2xl border-2 border-blue-400 rounded p-2 w-full max-w-md text-center bg-white mb-4"
        value={text}
        readOnly
      />

      <div className="space-x-4 mb-6">
        <button onClick={speak} className="bg-green-500 hover:bg-green-600 text-white p-3 rounded text-lg">
          🔊 Vorlesen
        </button>
        <button onClick={() => setText("")} className="bg-red-400 hover:bg-red-500 text-white p-3 rounded text-lg">
          🔄 Löschen
        </button>
        <button onClick={() => setText((prev) => prev.slice(0, -1))} className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded text-lg">
          ⌫ Löschen
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3 max-w-md">
        {LETTERS.map((letter) => (
          <button
            key={letter}
            onClick={() => addLetter(letter)}
            className="bg-white border-2 border-blue-300 text-blue-800 font-bold text-xl p-4 rounded hover:bg-blue-100"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
