const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/calc", (req, res) => {
  const { num1, num2, operator } = req.body;

  let result;

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
  else result = "Invalid operator";

  res.json({ result });
});

app.listen(5000, () => {
  console.log("Calculator backend running on http://localhost:5000");
});
