
---

# 📘 FRONTEND README  


```md
# YouTube Clone – Frontend (React + Tailwind)

This is the frontend of the YouTube Clone application built using
React (Vite), Tailwind CSS, and React Router.

The UI closely follows the original YouTube layout and user experience.

---

## 🚀 Tech Stack

- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- Context API

---

## 🎨 UI Features

- YouTube-like Header & Sidebar
- Responsive Layout
- Video Grid on Home Page
- Watch Page with Video Player
- Login & Signup Pages
- Channel Page
- Upload Video UI
- Category Filters (UI)
- Suggested Videos Section

---

## 📁 Project Structure

frontend/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── api/
    │   └── axios.js
    ├── context/
    │   ├── AuthContext.jsx
    │   └── VideoContext.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Sidebar.jsx
    │   ├── VideoCard.jsx
    │   └── watch/
    └── pages/
        ├── Home.jsx
        ├── Login.jsx
        ├── Signup.jsx
        ├── Watch.jsx
        ├── Channel.jsx
        └── UploadVideo.jsx

---

## ▶️ How to Run Frontend

```bash
cd frontend
npm install
npm run dev
