import { useState } from "react";
import { mockResponses } from "../data/MockResponses";
import { Link } from "react-router-dom";

const Symptom = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = Object.keys(mockResponses).filter((symptom) =>
      symptom.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(matches);
  };

  const clearInput = () => {
    setInput("");
    setSuggestions([]);
  };

  const matchedSymptoms =
    input.trim() === ""
      ? []
      : Object.keys(mockResponses).filter((symptom) =>
          input.toLowerCase().includes(symptom)
        );

  return (
    <div className="max-w-2xl mx-auto mt-16 px-4">
      <h1 className="text-3xl mb-4">Mock AI Symptom Checker</h1>

      <p className="text-gray-600 mb-6">
        Enter one or more symptoms separated by spaces. Example:{" "}
        <span className="font-semibold">fever headache</span>
      </p>

      <input
        type="text"
        placeholder="Try: fever headache cough"
        value={input}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {suggestions.length > 0 && (
        <ul className="border rounded bg-white shadow mt-1 max-h-40 overflow-y-auto">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setInput(s);
                setSuggestions([]);
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
      
      <Link to="/">
      <button
        className="px-4 py-2 bg-red-300 rounded hover:bg-red-400 mt-3 mb-6 mr-3 transition"
      >
        Go Back
      </button>
      </Link>
      <button
        onClick={clearInput}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mt-3 mb-6 transition"
      >
        Clear
      </button>

      {input && matchedSymptoms.length === 0 && (
        <div className="p-3 bg-gray-100 rounded mb-4">
          ⚠️ No valid symptoms recognized.
        </div>
      )}

      {matchedSymptoms.map((symptom, index) => (
        <div key={index} className="mb-6">
          <h3 className="capitalize mb-2">{symptom}</h3>

          {mockResponses[symptom].map((res: any, i: number) => (
            <div
              key={i}
              className={`p-3 mb-2 rounded ${
                res.severity === "info"
                  ? "bg-blue-100 text-blue-800"
                  : res.severity === "warning"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {res.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Symptom