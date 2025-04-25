# 🪙 Crypto Tracker

A real-time cryptocurrency price tracker inspired by CoinMarketCap. Built with React, Redux Toolkit, and Tailwind CSS. Simulated live updates using setInterval to mimic WebSocket behavior.

## 🚀 Features

- 📊 Real-time simulated price updates of crypto assets
- 🌐 Fully responsive UI
- 📈 7-day mini chart (static SVG/image)
- 💹 Color-coded percentage changes
- 🛠 Built with React + Redux Toolkit + Tailwind CSS

## 📦 Tech Stack

- React
- Redux Toolkit
- Tailwind CSS
- JavaScript (ES6+)

## 🧠 Architecture

- **Redux Slice:** Manages asset state (`setAssets`, `updateAssets`)
- **Simulated WebSocket:** Uses `setInterval` to mimic real-time data updates
- **State Flow:** Global Redux state → Component selectors → UI updates
- **Component-based UI:** `CryptoTable` handles rendering the table

## 🛠️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/crypto-tracker.git
   cd crypto-tracker
