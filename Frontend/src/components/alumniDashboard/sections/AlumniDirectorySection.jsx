import React, { useState } from "react";

// Example alumni data (expand as needed)
const alumniList = [
  { name: "Amit Patel", company: "Google", branch: "CSE", year: 2022, skills: ["React", "Node.js", "UI/UX", "Python"], avatar: "https://randomuser.me/api/portraits/men/68.jpg" },
  { name: "Priya Sharma", company: "Microsoft", branch: "ECE", year: 2021, skills: ["Python", "AI", "C#", "Ruby"], avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
  { name: "Rahul Verma", company: "Amazon", branch: "ME", year: 2020, skills: ["Java", "Spring", "Go", "Python"], avatar: "https://randomuser.me/api/portraits/men/66.jpg" },
  { name: "Sneha Joshi", company: "Facebook", branch: "CSE", year: 2023, skills: ["Figma", "UI/UX", "React", "Kotlin"], avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
];

const AlumniDirectorySection = ({ search = "", filter = {}, onAlumniConnectChange }) => {
  const [searchText, setSearchText] = useState("");
  const [filterState, setFilterState] = useState({ skills: "", branch: "" });
  const [connectionState, setConnectionState] = useState({});
  const [connectedAlumni, setConnectedAlumni] = useState([]);

  const handleSearch = (e) => setSearchText(e.target.value);
  const handleFilter = (field, value) => setFilterState(f => ({ ...f, [field]: value }));
  const handleConnect = (alumniName, alumniObj) => {
    setConnectionState((prev) => ({ ...prev, [alumniName]: "pending" }));
  };

  // Simulate alumni accepting the request (for demo, click again to accept)
  const handleAccept = (alumniName, alumniObj) => {
    setConnectionState((prev) => ({ ...prev, [alumniName]: "connected" }));
    setConnectedAlumni((prev) => {
      if (!prev.find(a => a.name === alumniName)) {
        const newList = [...prev, alumniObj];
        if (onAlumniConnectChange) onAlumniConnectChange(newList);
        return newList;
      }
      return prev;
    });
  };

  // Filtering logic similar to StudentDirectorySection
  const filterSkillsArr = (filterState.skills || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
  const filterBranchArr = (filterState.branch || "").split(",").map(b => b.trim().toLowerCase()).filter(Boolean);

  let filteredAlumni = alumniList.filter((a) => {
    const matchesSearch =
      !searchText ||
      a.name.toLowerCase().includes(searchText.toLowerCase()) ||
      a.skills.some((skill) => skill.toLowerCase().includes(searchText.toLowerCase()));
    const matchesSkill =
      filterSkillsArr.length === 0 ||
      filterSkillsArr.some(fSkill => a.skills.some(skill => skill.toLowerCase().includes(fSkill)));
    const matchesBranch =
      filterBranchArr.length === 0 ||
      filterBranchArr.some(fBranch => a.branch.toLowerCase().includes(fBranch));
    return matchesSearch && matchesSkill && matchesBranch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
      <h3 className="font-bold text-xl text-green-700 mb-4">Alumni Directory</h3>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search alumni by name or skill..."
          className="w-full md:w-1/3 px-3 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          value={filterState.skills}
          onChange={e => handleFilter("skills", e.target.value)}
          placeholder="Filter by skills (comma separated)"
          className="w-full md:w-1/3 px-3 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          value={filterState.branch}
          onChange={e => handleFilter("branch", e.target.value)}
          placeholder="Filter by branch (comma separated)"
          className="w-full md:w-1/3 px-3 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <ul className="divide-y divide-green-100">
        {filteredAlumni.length === 0 ? (
          <li className="py-4 text-gray-500">No alumni found.</li>
        ) : (
          filteredAlumni.map((a, idx) => {
            const state = connectionState[a.name] || "none";
            return (
              <li key={idx} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-4">
                  <img src={a.avatar} alt={a.name} className="w-14 h-14 rounded-full object-cover border-2 border-green-200 shadow" />
                  <div>
                    <span className="font-semibold text-green-800">{a.name}</span>
                    <span className="ml-2 text-green-500 text-sm">({a.company}, {a.branch}, {a.year})</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
                  {a.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">{skill}</span>
                  ))}
                </div>
                {state === "none" && (
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-700 text-white font-semibold shadow hover:from-green-600 hover:to-blue-800 transition flex items-center gap-2 mt-2 md:mt-0" onClick={() => handleConnect(a.name, a)}>
                    <span>Connect</span>
                  </button>
                )}
                {state === "pending" && (
                  <button className="px-4 py-2 rounded-full bg-yellow-50 text-orange-600 font-semibold shadow flex items-center gap-2 cursor-not-allowed mt-2 md:mt-0" onClick={() => handleAccept(a.name, a)}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l2 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z' /></svg>
                    <span>Pending</span>
                  </button>
                )}
                {state === "connected" && (
                  <button className="px-4 py-2 rounded-full bg-green-500 text-white font-semibold shadow flex items-center gap-2 cursor-default mt-2 md:mt-0" disabled>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                    <span>Connected</span>
                  </button>
                )}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default AlumniDirectorySection;
