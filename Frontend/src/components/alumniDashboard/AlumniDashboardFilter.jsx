import React from "react";

const AlumniDashboardFilter = () => (
  <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs mb-6">
    <h3 className="font-bold text-lg text-green-700 mb-4">Filter Students</h3>
    <div className="mb-4">
      <label className="block text-sm font-semibold text-green-700 mb-1">Skills</label>
      <input type="text" placeholder="e.g. React, Python" className="w-full px-3 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-semibold text-green-700 mb-1">Branch</label>
      <input type="text" placeholder="e.g. CSE, ECE" className="w-full px-3 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
    </div>
    <button className="w-full py-2 rounded bg-gradient-to-r from-green-500 to-blue-700 text-white font-semibold hover:from-green-600 hover:to-blue-800 transition">Apply Filter</button>
  </div>
);

export default AlumniDashboardFilter;
