import React from "react";

const StudentDashboardSearchBar = () => (
  <div className="w-full flex items-center gap-2 mb-6">
    <input
      type="text"
      placeholder="Search alumni by name..."
      className="flex-1 px-4 py-2 rounded-l-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold hover:from-blue-600 hover:to-indigo-800 transition">Search</button>
  </div>
);

export default StudentDashboardSearchBar;
