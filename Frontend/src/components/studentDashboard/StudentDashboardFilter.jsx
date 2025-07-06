import React from "react";

const SKILLS = [
  "React", "Python", "Node.js", "UI/UX", "Go", "Ruby", "Java", "AI", "Spring", "C++", "PHP", "Swift", "Figma", "Kotlin", "C#"
];
const BRANCHES = [
  "CSE", "ECE", "ME", "CE", "EEE", "IT", "CIVIL"
];
const YEARS = [2022, 2023, 2024, 2025, 2026, 2027];

const StudentDashboardFilter = ({ filter, onChange }) => {
  const handlePillClick = (field, value) => {
    let arr = (filter[field] || "").split(",").map(v => v.trim()).filter(Boolean);
    if (arr.includes(String(value))) {
      arr = arr.filter(v => v !== String(value));
    } else {
      arr.push(String(value));
    }
    onChange(field, arr.join(","));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs mb-6">
      <h3 className="font-bold text-lg text-indigo-700 mb-4">Filter Students</h3>
      <div className="mb-4">
        <div className="block text-sm font-semibold text-blue-700 mb-1">Skills</div>
        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto custom-scrollbar">
          {SKILLS.map(skill => (
            <button
              key={skill}
              type="button"
              className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
                (filter.skills || "").split(",").includes(skill)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
              }`}
              onClick={() => handlePillClick("skills", skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="block text-sm font-semibold text-blue-700 mb-1">Branch</div>
        <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto custom-scrollbar">
          {BRANCHES.map(branch => (
            <button
              key={branch}
              type="button"
              className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
                (filter.branch || "").split(",").includes(branch)
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100"
              }`}
              onClick={() => handlePillClick("branch", branch)}
            >
              {branch}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="block text-sm font-semibold text-blue-700 mb-1">Year</div>
        <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto custom-scrollbar">
          {YEARS.map(year => (
            <button
              key={year}
              type="button"
              className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
                (filter.year || "").split(",").includes(String(year))
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"
              }`}
              onClick={() => handlePillClick("year", year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6366f1 0%, #a5b4fc 100%);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e0e7ff;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default StudentDashboardFilter;
