import React from "react";

const ConnectedStudentsSection = ({ connectedStudents }) => {
  if (!connectedStudents || connectedStudents.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full mt-8">
        <h3 className="font-bold text-xl text-indigo-700 mb-4">Connected Students</h3>
        <ul className="divide-y divide-blue-100 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
          <li className="py-4 text-gray-500">No connected students found.</li>
        </ul>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full mt-8">
      <h3 className="font-bold text-xl text-indigo-700 mb-4">Connected Students</h3>
      <ul className="divide-y divide-blue-100 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
        {connectedStudents.map((s, idx) => (
          <li key={idx} className="py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={s.avatar} alt={s.name} className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200 shadow" />
              <div>
                <span className="font-semibold text-indigo-800 text-lg">{s.name}</span>
                <span className="ml-2 text-blue-500 text-sm">({s.branch}, {s.year})</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {s.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium shadow-sm">{skill}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ConnectedAlumniSection = ({ connectedAlumni }) => {
  if (!connectedAlumni || connectedAlumni.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full mt-8">
        <h3 className="font-bold text-xl text-green-700 mb-4">Connected Alumni</h3>
        <ul className="divide-y divide-green-100 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
          <li className="py-4 text-gray-500">No connected alumni found.</li>
        </ul>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full mt-8">
      <h3 className="font-bold text-xl text-green-700 mb-4">Connected Alumni</h3>
      <ul className="divide-y divide-green-100 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
        {connectedAlumni.map((a, idx) => (
          <li key={idx} className="py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={a.avatar} alt={a.name} className="w-14 h-14 rounded-full object-cover border-2 border-green-200 shadow" />
              <div>
                <span className="font-semibold text-green-800 text-lg">{a.name}</span>
                <span className="ml-2 text-green-500 text-sm">({a.company}, {a.branch}, {a.year})</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {a.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium shadow-sm">{skill}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ConnectedStudentsSection, ConnectedAlumniSection };
