# ConnectU 🚀

Welcome to **ConnectU** – a modern, full-stack web application for campus communities, built for speed, scalability, and a beautiful user experience.

---

## 🌟 Features
- Lightning-fast development with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Modern, responsive UI with [Tailwind CSS](https://tailwindcss.com/)
- Animated, continuous company logo showcase
- Role-based access for Students, Alumni, Teachers, and TPOs
- Secure authentication and user management (backend-ready)
- Component-based architecture for easy maintenance
- Clean separation of Frontend and Backend
- Ready for production with optimized builds

---

## 📁 Project Structure
```
Mega-Pro/
│
├── Backend/         # Node.js + Express + MongoDB API
│   ├── config/      # Database connection (Mongoose)
│   ├── controllers/ # (Planned) API controllers
│   ├── middleware/  # (Planned) Express middleware
│   ├── models/      # (Planned) Mongoose models
│   ├── routes/      # (Planned) API routes
│   ├── .env         # Environment variables (PORT, MONGO_URI, JWT_SECRET)
│   ├── index.js     # Entry point
│   ├── package.json # Backend scripts & dependencies
│   └── ...
│
└── Frontend/        # React + Vite + Tailwind CSS app
    ├── public/      # Static assets (company logos, videos, etc.)
    ├── src/         # Source code
    │   ├── assets/  # Images, icons, etc.
    │   ├── components/ # Reusable React components
    │   ├── pages/   # Page-level components (login, signup)
    │   ├── App.jsx  # Main App component
    │   └── ...      # Other files
    ├── index.html   # App entry point
    ├── package.json # Frontend scripts & dependencies
    ├── vite.config.js # Vite config
    └── ...
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Mega-Pro
```

### 2. Setup Backend
```bash
cd Backend
cp .env.example .env # (or create .env as shown below)
npm install
npm start
```
- The backend runs on `http://localhost:4000` by default.
- Example `.env`:
  ```env
  PORT=4000
  MONGO_URI=mongodb://localhost:27017/ConnectU-Database
  JWT_SECRET=connectU-secret123
  ```

### 3. Setup Frontend
```bash
cd ../Frontend
npm install
npm run dev
```
- The frontend runs on `http://localhost:5173` by default.

---

## 🛠️ Available Scripts
### Frontend
- `npm run dev` – Start the development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build
- `npm run lint` – Lint the codebase

### Backend
- `npm start` – Start the backend server with nodemon

---

## 🎨 Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Icons, React Toastify, React CountUp, GSAP
- **Backend:** Node.js, Express, Mongoose, dotenv, cors, nodemon
- **Database:** MongoDB

---

## ✨ Key UI Components
- **Navbar:** Responsive, with hamburger menu and animated mobile menu
- **Hero Section:** Video background, bold headline, and call-to-action
- **Company Logos:** Smooth, continuous horizontal scrolling of top company logos
- **About, Features, Impact, Testimonials, FAQ, Team, Footer:** All sections are fully responsive and tablet-friendly

---

## 📦 Environment Variables
- **Frontend:** Create a `.env` file for any Vite/React environment variables (e.g., `VITE_API_URL`)
- **Backend:** `.env` for server port, MongoDB URI, JWT secret, etc.

---

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📝 License
This project is licensed under the MIT License.

---

## 🙏 Acknowledgements
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

Made with ❤️ by the ConnectU team.
