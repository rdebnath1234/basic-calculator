const display = document.getElementById('display');

// --------------------
function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

// --------------------
// BASIC CALCULATION
async function calculate() {
  try {
    const res = await fetch('/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression: display.value })
    });
    const data = await res.json();
    display.value = data.result ?? data.error;
  } catch {
    display.value = 'Server unavailable';
  }
}

// --------------------
// SQRT
async function squareRoot() {
  try {
    const res = await fetch('/sqrt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: Number(display.value) })
    });
    const data = await res.json();
    display.value = data.result ?? data.error;
  } catch {
    display.value = 'Server unavailable';
  }
}

// --------------------
// PERCENTAGE
async function percentage() {
  try {
    const res = await fetch('/percentage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: Number(display.value) })
    });
    const data = await res.json();
    display.value = data.result ?? data.error;
  } catch {
    display.value = 'Server unavailable';
  }
}

// --------------------
// MEMORY
async function memoryAdd() {
  await fetch('/memory/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: Number(display.value) })
  });
}

async function memorySub() {
  await fetch('/memory/sub', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: Number(display.value) })
  });
}

async function memoryRecall() {
  const res = await fetch('/memory/recall');
  const data = await res.json();
  display.value = data.memory;
}

async function memoryClear() {
  await fetch('/memory/clear', { method: 'POST' });
  display.value = '';
}

// ============================
// KEYBOARD SHORTCUTS
// ============================
document.addEventListener('keydown', (e) => {
  if ('0123456789+-*/.'.includes(e.key)) append(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Backspace') display.value = display.value.slice(0, -1);

  // MEMORY SHORTCUTS
  if (e.ctrlKey && e.key === 'm') memoryAdd();     // Ctrl + M → M+
  if (e.ctrlKey && e.key === 'n') memorySub();     // Ctrl + N → M-
  if (e.ctrlKey && e.key === 'r') memoryRecall();  // Ctrl + R → MR
  if (e.ctrlKey && e.key === 'c') memoryClear();   // Ctrl + C → MC
});
