# ConnectU 🚀

Welcome to **ConnectU** – a modern, full-stack web application for campus communities, built for speed, scalability, and a beautiful user experience.

---

## 🌟 Features
- Lightning-fast development with [Vite](https://vitejs.dev/)
- Modern, responsive UI powered by [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/)
- Animated, continuous company logo showcase
- Role-based access for Students, Alumni, Teachers, and TPOs
- Secure authentication and user management
- Component-based architecture for easy maintenance
- Clean separation of Frontend and Backend
- Ready for production with optimized builds

---

## 📁 Project Structure
```
Mega-Pro/
│
├── Backend/         # Server-side code (APIs, database, etc.)
│   ├── config/      # Database and config files
│   ├── controllers/ # API controllers
│   ├── middleware/  # Express middleware
│   ├── models/      # Database models
│   ├── routes/      # API routes
│   └── index.js     # Entry point
│
└── Frontend/        # Client-side React app
    ├── public/      # Static assets (company logos, videos, etc.)
    ├── src/         # Source code
    │   ├── assets/  # Images, icons, etc.
    │   ├── components/ # Reusable React components
    │   ├── pages/   # Page-level components
    │   ├── App.jsx  # Main App component
    │   └── ...      # Other files
    ├── index.html   # App entry point
    ├── package.json # Project metadata & scripts
    └── ...
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation & Development
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Mega-Pro/Frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to see your app.

---

## 🛠️ Available Scripts
- `npm run dev` – Start the development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build

---

## 🎨 Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express (add your DB, e.g., MongoDB)

---

## ✨ Key UI Components
- **Navbar:** Responsive, with hamburger menu and animated mobile menu
- **Hero Section:** Video background, bold headline, and call-to-action
- **Company Logos:** Smooth, continuous horizontal scrolling of top company logos
- **About, Features, Impact, Testimonials, FAQ, Team, Footer:** All sections are fully responsive and tablet-friendly

---

## 📦 Environment Variables
Create a `.env` file in the `Frontend` and/or `Backend` folder for sensitive data (API keys, etc.). Example:
```
VITE_API_URL=https://your-api-url.com
```

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

---

Made with ❤️ by the ConnectU team.
