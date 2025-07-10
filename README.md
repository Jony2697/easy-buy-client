# 🛒 easyBuy - Mini E-Commerce SPA

**easyBuy** is a modern, responsive Single Page Application (SPA) e-commerce platform built with **React.js** on the frontend and **Node.js/Express** on the backend. It allows users to browse products, view product details, manage a shopping cart, and simulate a checkout — all without requiring authentication.

---

## 🔗 Live Demo

👉 [https://incandescent-lolly-ce5983.netlify.app/](https://incandescent-lolly-ce5983.netlify.app/)

---

## 📁 GitHub Repositories

- 🔗 [Client Repository](https://github.com/Jony2697/easy-buy-client.git)
- 🔗 [Server Repository](https://github.com/Jony2697/easy-buy-server.git)

---

## 🧱 Tech Stack

### Frontend
- **React.js**
- **React Router**
- **Tailwind CSS** *(or your actual styling method)*
- **Context API** + `useState` for state management
- **Vite** (for fast build & dev environment)

### Backend
- **Node.js + Express**
- **CORS, dotenv**
- **MongoDB**

---

## 📄 Features

### 🏠 Home Page
- Product grid with at least 6 items
- Product cards display image, title, price, and “Add to Cart” button
- Clicking on a card navigates to Product Details

### 📃 Product Detail Page
- Displays product image, name, description, and price
- “Add to Cart” functionality

### 🛒 Cart Sidebar
- Slide-in/out sidebar for the shopping cart
- Quantity controls (+/-) per product
- Real-time total amount
- “Checkout” button opens modal

### 💳 Checkout Modal
- Modal form with:
  - Name
  - Email
  - Address
- “Submit” simulates order placement (no payment logic)

---

## 🧪 Backend API Features

- Simple REST API using Express
- Serves product data from JSON file (or database)
- Endpoint example:
  - `GET /products` – Fetch all products

---

## 🚀 How to Run Locally

### Frontend

```bash
git clone https://github.com/Jony2697/easy-buy-client.git
cd easy-buy-client
npm install
npm run dev 



