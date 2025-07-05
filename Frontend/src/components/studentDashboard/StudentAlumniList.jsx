import React from "react";

// Example alumni data
const alumni = [
  { name: "Amit Patel", company: "Google", skills: ["React", "Node.js"] },
  { name: "Priya Sharma", company: "Microsoft", skills: ["Python", "AI"] },
  { name: "Rahul Verma", company: "Infosys", skills: ["Java", "Spring"] },
  { name: "Sneha Joshi", company: "Amazon", skills: ["UI/UX", "Figma"] },
];

const StudentAlumniList = () => (
  <div className="bg-white rounded-xl shadow-md p-6 w-full">
    <h3 className="font-bold text-lg text-indigo-700 mb-4">Connected Alumni</h3>
    <ul className="divide-y divide-blue-100">
      {alumni.map((a, idx) => (
        <li key={idx} className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <span className="font-semibold text-blue-800">{a.name}</span>
            <span className="ml-2 text-blue-500 text-sm">({a.company})</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
            {a.skills.map((skill, i) => (
              <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{skill}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default StudentAlumniList;
