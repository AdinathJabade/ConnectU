import React from "react";

// Placeholder: Replace with real student data and logic
const students = [
  { name: "Riya Mehta", branch: "CSE", year: 2024, skills: ["React", "Python"] },
  { name: "Karan Singh", branch: "ECE", year: 2023, skills: ["Java", "AI"] },
];

const StudentDirectorySection = ({ search = "", filter = {} }) => {
  // Normalize search and filter values
  const searchText = search.trim().toLowerCase();
  // @ts-ignore
  const filterSkills = (filter.skills || "").trim().toLowerCase();
  // @ts-ignore
  const filterBranch = (filter.branch || "").trim().toLowerCase();

  // Filter students
  let filteredStudents = students.filter((s) => {
    // Search by name or skill
    const matchesSearch =
      !searchText ||
      s.name.toLowerCase().includes(searchText) ||
      s.skills.some((skill) => skill.toLowerCase().includes(searchText));
    // Filter by skill
    const matchesSkill =
      !filterSkills ||
      s.skills.some((skill) => skill.toLowerCase().includes(filterSkills));
    // Filter by branch
    const matchesBranch =
      !filterBranch || s.branch.toLowerCase().includes(filterBranch);
    return matchesSearch && matchesSkill && matchesBranch;
  });

  // Sort: names that start with searchText come first, then exact filter matches
  filteredStudents = filteredStudents.sort((a, b) => {
    // Prioritize name startsWith searchText
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    const aStarts = searchText && aName.startsWith(searchText);
    const bStarts = searchText && bName.startsWith(searchText);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    // Prioritize exact skill match
    const aSkillExact = filterSkills && a.skills.some(skill => skill.toLowerCase() === filterSkills);
    const bSkillExact = filterSkills && b.skills.some(skill => skill.toLowerCase() === filterSkills);
    if (aSkillExact && !bSkillExact) return -1;
    if (!aSkillExact && bSkillExact) return 1;
    // Prioritize exact branch match
    const aBranchExact = filterBranch && a.branch.toLowerCase() === filterBranch;
    const bBranchExact = filterBranch && b.branch.toLowerCase() === filterBranch;
    if (aBranchExact && !bBranchExact) return -1;
    if (!aBranchExact && bBranchExact) return 1;
    // Otherwise, keep original order
    return 0;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
      <h3 className="font-bold text-xl text-green-700 mb-4">Student Directory</h3>
      <ul className="divide-y divide-green-100">
        {filteredStudents.length === 0 ? (
          <li className="py-4 text-gray-500">No students found.</li>
        ) : (
          filteredStudents.map((s, idx) => (
            <li key={idx} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <span className="font-semibold text-green-800">{s.name}</span>
                <span className="ml-2 text-green-500 text-sm">({s.branch}, {s.year})</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
                {s.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">{skill}</span>
                ))}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default StudentDirectorySection;
