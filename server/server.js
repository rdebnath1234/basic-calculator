const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// =====================
// SERVER-SIDE MEMORY
// =====================
let memory = 0;

// =====================
// HELPER
// =====================
function isValidNumber(value) {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

// =====================
// BASIC CALCULATOR
// =====================
app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  try {
    if (!expression) {
      return res.status(400).json({ error: 'Empty expression' });
    }

    if (!/^[0-9+*/(). -]+$/.test(expression)) {
      return res.status(400).json({ error: 'Invalid characters' });
    }

    const result = Function(`"use strict"; return (${expression})`)();

    if (!isFinite(result)) {
      return res.status(400).json({ error: 'Math error' });
    }

    res.json({ result });
  } catch {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

// =====================
// SQUARE ROOT
// =====================
app.post('/sqrt', (req, res) => {
  const { value } = req.body;

  if (!isValidNumber(value)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  if (value < 0) {
    return res.status(400).json({ error: 'Negative square root not allowed' });
  }

  res.json({ result: Math.sqrt(value) });
});

// =====================
// PERCENTAGE
// =====================
app.post('/percentage', (req, res) => {
  const { value } = req.body;

  if (!isValidNumber(value)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  res.json({ result: value / 100 });
});

// =====================
// MEMORY APIs
// =====================
app.post('/memory/add', (req, res) => {
  const { value } = req.body;

  if (!isValidNumber(value)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  memory += value;
  res.json({ memory });
});

app.post('/memory/sub', (req, res) => {
  const { value } = req.body;

  if (!isValidNumber(value)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  memory -= value;
  res.json({ memory });
});

app.get('/memory/recall', (req, res) => {
  res.json({ memory });
});

app.post('/memory/clear', (req, res) => {
  memory = 0;
  res.json({ memory });
});

// =====================
app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
