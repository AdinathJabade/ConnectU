import React from "react";

const StudentDashboardFilter = () => (
  <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs mb-6">
    <h3 className="font-bold text-lg text-indigo-700 mb-4">Filter Alumni</h3>
    <div className="mb-4">
      <label className="block text-sm font-semibold text-blue-700 mb-1">Skills</label>
      <input type="text" placeholder="e.g. React, Python" className="w-full px-3 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-semibold text-blue-700 mb-1">Company</label>
      <input type="text" placeholder="e.g. Google, Infosys" className="w-full px-3 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>
    <button className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold hover:from-blue-600 hover:to-indigo-800 transition">Apply Filter</button>
  </div>
);

export default StudentDashboardFilter;
