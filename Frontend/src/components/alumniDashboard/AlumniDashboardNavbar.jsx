import React from "react";
import { FaHome, FaUserGraduate, FaUsers, FaBell, FaUser, FaComments, FaQuestion, FaBriefcase } from "react-icons/fa";

const AlumniDashboardNavbar = ({ setActiveSection }) => (
  <nav className="w-full flex items-center justify-between bg-white shadow-md px-4 sm:px-6 py-3 sticky top-0 z-30 border-b border-green-100">
    <div className="flex items-center gap-2">
      <button
        className="p-2 rounded-full hover:bg-green-50 transition"
        onClick={() => { window.location.href = "/"; }}
        title="Home"
      >
        <FaHome className="text-2xl text-green-700" />
      </button>
      <button
        className="font-extrabold text-2xl text-green-700 tracking-wider select-none focus:outline-none bg-transparent border-none cursor-pointer"
        style={{ background: "none", border: "none", padding: 0 }}
        onClick={() => { setActiveSection(null); }}
        title="Go to Dashboard"
      >
        ConnectU
      </button>
    </div>
    <div className="hidden md:flex items-center gap-4">
      <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection("student_directory")} title="Students"><FaUserGraduate className="text-xl text-green-700" /></button>
      <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection("alumni_directory")} title="Alumni"><FaUsers className="text-xl text-green-700" /></button>
      <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection("post_opportunity")} title="Post Opportunity"><FaBriefcase className="text-xl text-green-700" /></button>
      <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection("common_msg")} title="Q&A"><FaQuestion className="text-xl text-green-700" /></button>
      <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection("direct_msg")} title="Direct Message"><FaComments className="text-xl text-green-700" /></button>
      <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection("notification")} title="Notifications"><FaBell className="text-xl text-green-700" /></button>
      <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection("profile")} title="Profile"><FaUser className="text-2xl text-green-700" /></button>
    </div>
  </nav>
);

export default AlumniDashboardNavbar;
