import React from "react";

const AlumniDashboardSearchBar = () => (
  <div className="w-full flex items-center gap-2 mb-6">
    <input
      type="text"
      placeholder="Search students by name..."
      className="flex-1 px-4 py-2 rounded-l-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-green-500 to-blue-700 text-white font-semibold hover:from-green-600 hover:to-blue-800 transition">Search</button>
  </div>
);

export default AlumniDashboardSearchBar;
