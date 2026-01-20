# 🧠 Memory Game (React)

A simple and interactive **Memory Card Game** built using **React functional components and hooks**.  
The game dynamically adapts to different board sizes and supports both even and odd-sized boards.

---

## 🌐 Live Demo

👉 **Website:** https://memory-game-react-lac.vercel.app/

---

## 🚀 Features

- 🎯 Dynamic **N × N board size** (min: 2, max: 10)
- 🃏 Automatically generated **paired cards**
- 🟦 Supports **odd-sized boards** with a center empty card
- ✅ Matching logic for card pairs
- 🏆 Win detection when all cards are solved
- 🔄 Reset & replay functionality
- ⚛️ Built using modern React best practices

---

## 🧩 How the Game Works

1. Select a board size (between 2 and 10).
2. Cards are shuffled and placed on the board.
3. Click a card to flip it.
4. Flip another card:
   - If the values match → cards stay open.
   - If not → the previously flipped card is replaced.
5. If the total number of cells is odd, a **non-clickable empty card** is placed at the center.
6. The game is won when all cards are matched.

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS

---

## ▶️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/rupesh-ranjan/Memory-Game---React.git
cd Memory-Game---React
npm install
npm run dev
