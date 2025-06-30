import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50 border-b border-indigo-100"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-2xl lg:text-3xl text-indigo-700 tracking-wider drop-shadow-sm select-none transition-colors duration-200 hover:text-indigo-900">ConnectU</span>
        </div>
        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex gap-2">
          <a href="/login" className="px-4 py-2 rounded-lg font-semibold text-indigo-700 border border-indigo-200 bg-white hover:bg-indigo-50 shadow-sm transition">Login</a>
          <a href="/signup" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-indigo-800 transition">Sign Up</a>
        </div>
        {/* Hamburger for mobile & tablet */}
        <button
          className="lg:hidden p-2 rounded hover:bg-indigo-100 transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <i className="fas fa-bars text-2xl text-indigo-700"></i>
        </button>
      </div>
      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-indigo-100 flex flex-col items-center gap-2 py-4 animate-fade-in z-50">
          <a href="/login" className="w-11/12 text-center px-4 py-2 rounded-lg font-semibold text-indigo-700 border border-indigo-200 bg-white hover:bg-indigo-50 shadow-sm transition">Login</a>
          <a href="/signup" className="w-11/12 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-indigo-800 transition">Sign Up</a>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
