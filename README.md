# 🧮 Basic Calculator – Full Stack Version

## 📌 Project Overview
This project is a **full-stack Basic Calculator application** built using **HTML, CSS, JavaScript (Frontend)** and **Node.js with Express (Backend)**.

Unlike a simple frontend-only calculator, this project uses a **backend API** to handle:
- Arithmetic calculations
- Memory operations (M+, M-, MR, MC)
- Advanced operations like Square Root (√) and Percentage (%)

This project is developed as part of the **Unified Mentor Assignment** to demonstrate frontend–backend integration, error handling, and professional project structure.
The frontend UI now includes a **dribbble-inspired pink theme** with a centered **"Basic Calculator"** title, rounded display, and circular button styling.

---

## 🚀 Features

### 🔹 Basic Operations
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

### 🔹 Advanced Operations
- Square Root (√)
- Percentage (%)

### 🔹 Memory Functions (Backend Controlled)
- **M+** → Add value to memory  
- **M-** → Subtract value from memory  
- **MR** → Recall memory value  
- **MC** → Clear memory  

> Memory is stored **on the server during runtime** and resets when the server restarts.

---

## 📸 Feature Screenshots

### Home Screen
![Home Screen](client/assets/screenshots/01-home.png)

### Basic Calculation (7 + 8 = 15)
![Basic Addition](client/assets/screenshots/02-basic-addition.png)

### Square Root (√81 = 9)
![Square Root](client/assets/screenshots/03-square-root.png)

### Percentage (45% = 0.45)
![Percentage](client/assets/screenshots/04-percentage.png)

### Memory Add + Recall (M+ then MR)
![Memory Add Recall](client/assets/screenshots/05-memory-add-recall.png)

### Memory Subtract (M- then MR)
![Memory Subtract](client/assets/screenshots/06-memory-subtract.png)

### Memory Clear (MC then MR = 0)
![Memory Clear](client/assets/screenshots/07-memory-clear.png)

---

## ⌨️ Keyboard Shortcuts
| Key | Action |
|----|-------|
| 0–9 | Number input |
| + - * / | Operators |
| Enter | Equals (=) |
| Backspace | Delete |
| C | Clear |
| Ctrl + M | Memory Add (M+) |
| Ctrl + N | Memory Subtract (M-) |
| Ctrl + R | Memory Recall (MR) |
| Ctrl + C | Memory Clear (MC) |

---

## 🖥️ Tech Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- REST APIs

---

## 📂 Project Structure

Basic-Calculator/
│
├── client/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── package.json
│
├── server/
│ ├── server.js
│ └── package.json
│
└── README.md

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-link>
cd Basic-Calculator
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the App
```bash
npm start
```
Server runs on:

http://localhost:5001

### 4️⃣ Open the App

Open the calculator in your browser at:

http://localhost:5001

The Express server now serves both the frontend files and the calculator API, so you do not need to open `client/index.html` directly.

---

## 🚆 Deploy on Railway (GitHub)

This repository is configured for Railway deployment from the **repository root**.

### 1️⃣ Push the latest code to GitHub
```bash
git add .
git commit -m "Update project"
git push origin main
```

### 2️⃣ Create a Railway project from GitHub
- Open the Railway dashboard
- Click **New Project**
- Choose **Deploy from GitHub Repo**
- Select this repository
- Keep the source set to the repository root

### 3️⃣ Automatic deploys

Once the repository is connected, Railway will automatically build and deploy new commits pushed to the connected branch.
