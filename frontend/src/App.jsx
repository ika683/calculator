import { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    const res = await fetch("http://localhost:5000/api/calc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num1: Number(num1),
        num2: Number(num2),
        operator: operator,
      }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <div className="display">
        {result !== null ? result : "0"}
      </div>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          placeholder="Num 1"
          onChange={(e) => setNum1(e.target.value)}
        />

        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <input
          type="number"
          value={num2}
          placeholder="Num 2"
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <button onClick={calculate}>Calculate</button>
    </div>
  );
}
pApp.propTypes = {
  num1: PropTypes.number,
  num2: PropTypes.number,
  operator: PropTypes.string,
  result: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default App;
