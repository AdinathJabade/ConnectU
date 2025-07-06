import React, { useState } from "react";

// Example student data with only 4 skills per student
const students = [
  { name: "Riya Mehta", branch: "CSE", year: 2024, skills: ["React", "Python", "Node.js", "UI/UX"], avatar: "https://randomuser.me/api/portraits/women/44.jpg", connectedAlumni: ["Amit Patel", "Priya Sharma"] },
  { name: "Karan Singh", branch: "ECE", year: 2023, skills: ["Java", "AI", "Spring", "C++"], avatar: "https://randomuser.me/api/portraits/men/45.jpg", connectedAlumni: ["Amit Patel"] },
  { name: "Sneha Joshi", branch: "CSE", year: 2025, skills: ["Figma", "UI/UX", "React", "Kotlin"], avatar: "https://randomuser.me/api/portraits/women/65.jpg", connectedAlumni: ["Priya Sharma"] },
  { name: "Rahul Verma", branch: "ME", year: 2022, skills: ["Java", "Spring", "Go", "Python"], avatar: "https://randomuser.me/api/portraits/men/66.jpg", connectedAlumni: ["Amit Patel"] },
  { name: "Priya Sharma", branch: "ECE", year: 2024, skills: ["Python", "AI", "C#", "Ruby"], avatar: "https://randomuser.me/api/portraits/women/67.jpg", connectedAlumni: ["Sneha Joshi"] },
  { name: "Amit Patel", branch: "CE", year: 2023, skills: ["Node.js", "PHP", "Swift", "React"], avatar: "https://randomuser.me/api/portraits/men/68.jpg" },
  { name: "Divya Kapoor", branch: "CSE", year: 2025, skills: ["Java", "UI/UX", "Figma", "Python"], avatar: "https://randomuser.me/api/portraits/women/69.jpg" },
  { name: "Sahil Gupta", branch: "ME", year: 2022, skills: ["Go", "C++", "Java", "Spring"], avatar: "https://randomuser.me/api/portraits/men/70.jpg" },
  { name: "Meera Nair", branch: "EEE", year: 2026, skills: ["AI", "React", "Node.js", "Kotlin"], avatar: "https://randomuser.me/api/portraits/women/71.jpg" },
  { name: "Vikram Rao", branch: "CE", year: 2024, skills: ["PHP", "Swift", "C#", "Python"], avatar: "https://randomuser.me/api/portraits/men/72.jpg" },
  { name: "Anjali Menon", branch: "IT", year: 2027, skills: ["Go", "React", "Spring", "Figma"], avatar: "https://randomuser.me/api/portraits/women/73.jpg" },
  { name: "Rohit Sinha", branch: "CIVIL", year: 2023, skills: ["Java", "Node.js", "C++", "Python"], avatar: "https://randomuser.me/api/portraits/men/74.jpg" },
  { name: "Pooja Desai", branch: "EEE", year: 2026, skills: ["AI", "UI/UX", "Figma", "C#"], avatar: "https://randomuser.me/api/portraits/women/75.jpg" },
  { name: "Arjun Yadav", branch: "IT", year: 2025, skills: ["React", "Spring", "Java", "Python"], avatar: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Simran Kaur", branch: "CIVIL", year: 2022, skills: ["UI/UX", "Figma", "Swift", "C++"], avatar: "https://randomuser.me/api/portraits/women/77.jpg" },
];

export { students };

const StudentDirectorySection = ({ search = "", filter = {}, alumniName = "Amit Patel", onConnectChange }) => {
  const searchText = search.trim().toLowerCase();
  // @ts-ignore
  const filterSkillsArr = (filter.skills || "")
    .split(",")
    .map(s => s.trim().toLowerCase())
    .filter(Boolean);
  // @ts-ignore
  const filterBranchArr = (filter.branch || "")
    .split(",")
    .map(b => b.trim().toLowerCase())
    .filter(Boolean);
  // @ts-ignore
  const filterYearArr = (filter.year || "")
    .split(",")
    .map(y => y.trim())
    .filter(Boolean);

  let filteredStudents = students.filter((s) => {
    const matchesSearch =
      !searchText ||
      s.name.toLowerCase().includes(searchText) ||
      s.skills.some((skill) => skill.toLowerCase().includes(searchText));
    const matchesSkill =
      filterSkillsArr.length === 0 ||
      filterSkillsArr.some(fSkill => s.skills.some(skill => skill.toLowerCase().includes(fSkill)));
    const matchesBranch =
      filterBranchArr.length === 0 ||
      filterBranchArr.some(fBranch => s.branch.toLowerCase().includes(fBranch));
    const matchesYear =
      filterYearArr.length === 0 ||
      filterYearArr.includes(String(s.year));
    return matchesSearch && matchesSkill && matchesBranch && matchesYear;
  });

  filteredStudents = filteredStudents.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    const aStarts = searchText && aName.startsWith(searchText);
    const bStarts = searchText && bName.startsWith(searchText);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    const aSkillExact = filterSkillsArr.length > 0 && filterSkillsArr.some(fSkill => a.skills.some(skill => skill.toLowerCase() === fSkill));
    const bSkillExact = filterSkillsArr.length > 0 && filterSkillsArr.some(fSkill => b.skills.some(skill => skill.toLowerCase() === fSkill));
    if (aSkillExact && !bSkillExact) return -1;
    if (!aSkillExact && bSkillExact) return 1;
    const aBranchExact = filterBranchArr.length > 0 && filterBranchArr.some(fBranch => a.branch.toLowerCase() === fBranch);
    const bBranchExact = filterBranchArr.length > 0 && filterBranchArr.some(fBranch => b.branch.toLowerCase() === fBranch);
    if (aBranchExact && !bBranchExact) return -1;
    if (!aBranchExact && bBranchExact) return 1;
    const aYearExact = filterYearArr.length > 0 && filterYearArr.includes(String(a.year));
    const bYearExact = filterYearArr.length > 0 && filterYearArr.includes(String(b.year));
    if (aYearExact && !bYearExact) return -1;
    if (!aYearExact && bYearExact) return 1;
    return 0;
  });

  // Track connection state for each student
  const [connectionState, setConnectionState] = useState({});
  const [connectedStudents, setConnectedStudents] = useState([]);

  const handleConnect = (studentName) => {
    setConnectionState((prev) => ({ ...prev, [studentName]: "pending" }));
  };

  // Simulate student accepting the request (for demo, click again to accept)
  const handleAccept = (studentName, studentObj) => {
    setConnectionState((prev) => ({ ...prev, [studentName]: "accepted" }));
    setConnectedStudents((prev) => {
      if (!prev.find(s => s.name === studentName)) {
        const newList = [...prev, studentObj];
        if (onConnectChange) onConnectChange(newList);
        return newList;
      }
      return prev;
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
      <h3 className="font-bold text-xl text-indigo-700 mb-4">Student Directory</h3>
      <ul
        className="divide-y divide-blue-100 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#6366f1 #e0e7ff' }}
      >
        {filteredStudents.length === 0 ? (
          <li className="py-4 text-gray-500">No students found.</li>
        ) : (
          filteredStudents.map((s, idx) => {
            const state = connectionState[s.name] || "none";
            return (
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
                {state === "none" && (
                  <button className="mt-2 md:mt-0 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow hover:from-blue-600 hover:to-indigo-700 transition flex items-center gap-2" onClick={() => handleConnect(s.name)}>
                    <span>Connect</span>
                  </button>
                )}
                {state === "pending" && (
                  <button className="mt-2 md:mt-0 px-4 py-2 rounded-full bg-yellow-50 text-orange-600 font-semibold shadow flex items-center gap-2 cursor-not-allowed" onClick={() => handleAccept(s.name, s)}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l2 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z' /></svg>
                    <span>Pending</span>
                  </button>
                )}
                {state === "accepted" && (
                  <button className="mt-2 md:mt-0 px-4 py-2 rounded-full bg-green-500 text-white font-semibold shadow flex items-center gap-2 cursor-default" disabled>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                    <span>Connected</span>
                  </button>
                )}
              </li>
            );
          })
        )}
      </ul>
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

export default StudentDirectorySection;
