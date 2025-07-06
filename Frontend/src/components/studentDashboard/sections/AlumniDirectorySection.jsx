import React, { useState } from "react";
import { FaFilter, FaUserPlus, FaCheck, FaHourglassHalf } from "react-icons/fa";

const alumniList = [
	{
		name: "Amit Patel",
		company: "Google",
		skills: ["React", "Node.js"],
		year: 2022,
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		email: "amit.patel@alumni.com",
	},
	{
		name: "Priya Sharma",
		company: "Microsoft",
		skills: ["Python", "AI"],
		year: 2021,
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		email: "priya.sharma@alumni.com",
	},
	{
		name: "Rahul Verma",
		company: "Infosys",
		skills: ["Java", "Spring"],
		year: 2023,
		avatar: "https://randomuser.me/api/portraits/men/65.jpg",
		email: "rahul.verma@alumni.com",
	},
	{
		name: "Sneha Joshi",
		company: "Amazon",
		skills: ["UI/UX", "Figma"],
		year: 2020,
		avatar: "https://randomuser.me/api/portraits/women/68.jpg",
		email: "sneha.joshi@alumni.com",
	},
];

const skillOptions = [
	"React", "Node.js", "Python", "AI", "Java", "Spring", "UI/UX", "Figma",
	"C++", "C#", "Go", "Ruby", "PHP", "Swift", "Kotlin", 
];
const companyOptions = ["Google", "Microsoft", "Infosys", "Amazon"];
const yearOptions = [2020, 2021, 2022, 2023];

const AlumniDirectorySection = ({ isAlumni = false }) => {
	/**
	 * @type {string[]}
	 */
	const [selectedSkills, setSelectedSkills] = useState([]);
	const [company, setCompany] = useState("");
	const [year, setYear] = useState("");
	const [showFilters, setShowFilters] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.innerWidth < 1024 ? true : false;
		}
		return true;
	});
	const [connectionStatus, setConnectionStatus] = useState({});

	// Pure JS toggleSkill, no types, no TS logic
	const toggleSkill = skill => {
		let arr = Array.isArray(selectedSkills) ? selectedSkills.filter(s => typeof s === 'string') : [];
		if (arr.indexOf(skill) !== -1) {
			arr = arr.filter(s => s !== skill);
		} else {
			// Defensive: ensure arr is always an array
			if (!Array.isArray(arr)) arr = [];
			arr = arr.concat([skill]);
		}
		setSelectedSkills(arr);
	};

	// Pure JS filter, no TS logic
	const filtered = alumniList.filter(a =>
		(selectedSkills.length === 0 || selectedSkills.every(s => a.skills.indexOf(s) !== -1)) &&
		(company === "" || a.company.toLowerCase().includes(company.toLowerCase())) &&
		(year === "" || a.year.toString() === year)
	);

	const getStatus = idx => connectionStatus[idx] || "none";

	const handleRequest = idx => {
		setConnectionStatus(prev => ({ ...prev, [idx]: "pending" }));
	};

	const handleAccept = idx => {
		setConnectionStatus(prev => ({ ...prev, [idx]: "connected" }));
	};

	return (
		<div className="flex flex-col lg:flex-row gap-4 md:gap-8 p-2 md:p-6">
			{/* Filters with fixed height and scroll, always visible, collapsible on mobile */}
			<div className={`w-full lg:w-1/4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 mb-4 lg:mb-0 border border-blue-100 transition-all duration-300 max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[75vh] overflow-y-auto custom-scrollbar ${showFilters || (typeof window !== 'undefined' && window.innerWidth >= 1024) ? '' : 'hidden'}`}>
				<div className="flex items-center justify-between mb-4">
					<h3 className="font-bold text-base sm:text-lg md:text-xl text-indigo-700 tracking-tight">Filter Alumni</h3>
					<button className="lg:hidden text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-full p-1" onClick={() => setShowFilters(f => !f)} aria-label="Toggle Filters">
						<FaFilter />
					</button>
				</div>
				<div className="mb-5">
					<label className="block text-xs sm:text-sm font-semibold text-blue-700 mb-2">Skills</label>
					<div className="flex flex-wrap gap-2">
						{skillOptions.map(opt => (
							<button
								key={opt}
								className={`px-2 py-1 sm:px-3 rounded-full border text-xs font-medium transition shadow-sm ${selectedSkills.indexOf(opt) !== -1 ? 'bg-blue-500 text-white border-blue-500' : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'}`}
								onClick={() => toggleSkill(opt)}
								type="button"
							>
								{opt}
								{selectedSkills.indexOf(opt) !== -1 && (
									<span className="ml-1 text-white font-bold">×</span>
								)}
							</button>
						))}
					</div>
				</div>
				<div className="mb-5">
					<label className="block text-xs sm:text-sm font-semibold text-blue-700 mb-2">Company</label>
					<div className="flex flex-wrap gap-2">
						{companyOptions.map(opt => (
							<button
								key={opt}
								className={`px-2 py-1 sm:px-3 rounded-full border text-xs font-medium transition shadow-sm ${company === opt ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100'}`}
								onClick={() => setCompany(company === opt ? "" : opt)}
								type="button"
							>
								{opt}
							</button>
						))}
					</div>
				</div>
				<div className="mb-5">
					<label className="block text-xs sm:text-sm font-semibold text-blue-700 mb-2">Graduation Year</label>
					<div className="flex flex-wrap gap-2">
						{yearOptions.map(opt => (
							<button
								key={opt}
								className={`px-2 py-1 sm:px-3 rounded-full border text-xs font-medium transition shadow-sm ${year === opt.toString() ? 'bg-pink-500 text-white border-pink-500' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'}`}
								onClick={() => setYear(year === opt.toString() ? "" : opt.toString())}
								type="button"
							>
								{opt}
							</button>
						))}
					</div>
				</div>
				<button className="mt-2 w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow hover:from-blue-600 hover:to-indigo-700 transition text-sm sm:text-base md:text-lg" onClick={() => { setSelectedSkills([]); setCompany(""); setYear(""); }}>Clear Filters</button>
			</div>
			{/* Directory with fixed height and scroll */}
			<div className="w-full lg:w-3/4 max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[75vh] overflow-y-auto custom-scrollbar">
				<div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 md:p-8 animate-fade-in border border-blue-100">
					<h3 className="font-bold text-lg sm:text-xl md:text-2xl text-indigo-700 mb-3 sm:mb-4 md:mb-6 tracking-tight">Connected Alumni</h3>
					<ul className="divide-y divide-blue-100">
						{filtered.length === 0 && <li className="py-6 sm:py-8 text-blue-400 text-center text-sm sm:text-base md:text-lg">No alumni found.</li>}
						{filtered.map((a, idx) => (
							<li key={idx} className="py-3 sm:py-4 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 group transition-all duration-200 hover:bg-indigo-50 rounded-xl px-2 md:px-4">
								<div className="flex items-center gap-2 sm:gap-3 md:gap-4">
									<div className="relative">
										<img src={a.avatar} alt={a.name} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border-4 border-blue-200 object-cover shadow-md group-hover:scale-105 transition-transform duration-200" />
										<span className="absolute bottom-1 right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 border-2 border-white rounded-full"></span>
									</div>
									<div>
										<span className="font-semibold text-blue-800 text-sm sm:text-base md:text-lg">{a.name}</span>
										<span className="ml-2 text-blue-500 text-xs sm:text-sm">({a.company})</span>
										<div className="flex flex-wrap gap-2 mt-1">
											{a.skills.map((skill, i) => (
												<span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{skill}</span>
											))}
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end gap-2 min-w-[90px] sm:min-w-[110px] md:min-w-[140px]">
									<span className="text-xs text-blue-400">Batch {a.year}</span>
									{/* Connection/request buttons */}
									{!isAlumni && getStatus(idx) === "none" && (
										<button
											className="flex items-center gap-1 text-white bg-blue-500 hover:bg-blue-600 font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
											onClick={() => handleRequest(idx)}
											tabIndex={0}
										>
											<FaUserPlus /> Request Send
										</button>
									)}
									{!isAlumni && getStatus(idx) === "pending" && (
										<span className="flex items-center gap-1 text-yellow-600 font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-yellow-50"><FaHourglassHalf /> Pending</span>
									)}
									{!isAlumni && getStatus(idx) === "connected" && (
										<span className="flex items-center gap-1 text-green-600 font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-green-50"><FaCheck /> Connected</span>
									)}
									{isAlumni && getStatus(idx) === "pending" && (
										<button
											className="flex items-center gap-1 text-white bg-green-500 hover:bg-green-600 font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400"
											onClick={() => handleAccept(idx)}
											tabIndex={0}
										>
											<FaCheck /> Accept
										</button>
									)}
									{isAlumni && getStatus(idx) === "connected" && (
										<span className="flex items-center gap-1 text-green-600 font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-green-50"><FaCheck /> Connected</span>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AlumniDirectorySection;
