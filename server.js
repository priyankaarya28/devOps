const express = require("express");
const { sum, multiply } = require("./math");

const app = express();
const PORT = 3000;

app.get("/sum", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: sum(a, b) });
});

app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: multiply(a, b) });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Export for testing
