import React, { useState } from "react";
import { FaHome, FaPen, FaComments, FaUsers, FaBell, FaUser, FaBars, FaTimes, FaQuestion } from "react-icons/fa";

const StudentDashboardNavbar = ({ setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between bg-white shadow-md px-4 sm:px-6 py-3 sticky top-0 z-30 border-b border-indigo-100">
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          onClick={() => { window.location.href = "/"; }}
          title="Home"
        >
          <FaHome className="text-2xl text-indigo-700" />
        </button>
        <button
          className="font-extrabold text-2xl text-indigo-700 tracking-wider select-none focus:outline-none bg-transparent border-none cursor-pointer"
          style={{ background: "none", border: "none", padding: 0 }}
          onClick={() => { setActiveSection(null); setMenuOpen(false); }}
          title="Go to Dashboard"
        >
          ConnectU
        </button>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4">
        <button
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          onClick={() => setActiveSection("post")}
          title="Post"
        >
          <FaPen className="text-xl text-indigo-700" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          onClick={() => setActiveSection("common_msg")}
          title="Q&A / Group Chat"
        >
          <FaQuestion className="text-xl text-indigo-700" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          onClick={() => setActiveSection("direct_msg")}
          title="Direct Messaging"
        >
          <FaComments className="text-xl text-indigo-700" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          title="Recent Notices"
          onClick={() => setActiveSection("notification")}
        >
          <FaBell className="text-xl text-indigo-700" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          title="Profile"
          onClick={() => setActiveSection("profile")}
        >
          <FaUser className="text-2xl text-indigo-700" />
        </button>
      </div>
      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Open menu"
        >
          {menuOpen ? <FaTimes className="text-2xl text-indigo-700" /> : <FaBars className="text-2xl text-indigo-700" />}
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30 flex flex-col items-end md:hidden">
          <div className="w-3/4 max-w-xs bg-white shadow-2xl h-full flex flex-col gap-4 p-6 animate-slide-in-right">
            <button
              className="self-end mb-2 p-2 rounded-full hover:bg-indigo-50 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes className="text-2xl text-indigo-700" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-indigo-50 transition"
              onClick={() => { setActiveSection("post"); setMenuOpen(false); }}
              title="Post"
            >
              <FaPen className="text-xl text-indigo-700" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-indigo-50 transition"
              onClick={() => { setActiveSection("common_msg"); setMenuOpen(false); }}
              title="Q&A / Group Chat"
            >
              <FaQuestion className="text-xl text-indigo-700" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-indigo-50 transition"
              onClick={() => { setActiveSection("direct_msg"); setMenuOpen(false); }}
              title="Direct Messaging"
            >
              <FaComments className="text-xl text-indigo-700" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-indigo-50 transition"
              onClick={() => { setActiveSection("notification"); setMenuOpen(false); }}
              title="Recent Notices"
            >
              <FaBell className="text-xl text-indigo-700" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-indigo-50 transition"
              onClick={() => { setActiveSection("profile"); setMenuOpen(false); }}
              title="Profile"
            >
              <FaUser className="text-2xl text-indigo-700" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-indigo-50 transition"
              onClick={() => { window.location.href = "/"; setMenuOpen(false); }}
              title="Home"
            >
              <FaHome className="text-2xl text-indigo-700" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StudentDashboardNavbar;
