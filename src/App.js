import { useState } from "react";
import { add } from "./StringCalculator";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateSum = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <div>
        <label htmlFor="numbers" className="label">
          Enter Numbers (e.g., "1,2,3" or "//;\n1;2"):
        </label>
        <textarea
          id="numbers"
          value={input}
          onChange={handleInputChange}
          className="textarea"
          rows="3"
          placeholder="Enter numbers here..."
        ></textarea>
      </div>
      <button onClick={calculateSum} className="button">
        Calculate Sum
      </button>
      {result !== null && (
        <div className="result">
          <strong>Sum:</strong> {result}
        </div>
      )}
      {error && (
        <div className="error">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}

export default App;
