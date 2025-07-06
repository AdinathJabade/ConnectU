import React from "react";

const alumniProfile = {
  name: "Amit Patel",
  email: "amit.patel@alumni.com",
  avatar: "https://randomuser.me/api/portraits/men/68.jpg",
  company: "Google",
  branch: "CSE",
  year: 2022,
  skills: ["React", "Node.js", "UI/UX", "Python"],
  connections: 18,
  posts: 7,
  messages: 4,
};

const AlumniProfileSection = () => (
  <div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 w-full">
    <div className="bg-gradient-to-br from-green-100 to-blue-50 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 flex flex-col items-center w-full max-w-lg border border-green-200 relative">
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <button className="px-2 sm:px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold hover:bg-green-200 transition">
          Edit
        </button>
      </div>
      <div className="relative mb-2 sm:mb-4">
        <img
          src={alumniProfile.avatar}
          alt="Profile"
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-green-300 object-cover shadow-lg"
        />
        <span className="absolute bottom-1 right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 border-2 border-white rounded-full"></span>
      </div>
      <h2 className="text-lg sm:text-2xl font-extrabold text-green-800 mb-1 tracking-tight text-center">
        {alumniProfile.name}
      </h2>
      <p className="text-green-600 mb-1 font-medium text-xs sm:text-base text-center">
        {alumniProfile.email}
      </p>
      <p className="text-gray-500 mb-4 text-xs sm:text-base text-center">
        {alumniProfile.company}, {alumniProfile.branch}{" "}
        <span className="mx-1">|</span> Batch of {alumniProfile.year}
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 justify-center">
        {alumniProfile.skills.map((skill, i) => (
          <span
            key={i}
            className="px-2 sm:px-3 py-1 rounded-full bg-green-200 text-green-800 text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex gap-4 sm:gap-6 mt-2 w-full justify-center">
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-xl font-bold text-green-700">
            {alumniProfile.connections}
          </span>
          <span className="text-xs text-green-500">Connections</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-xl font-bold text-green-700">
            {alumniProfile.posts}
          </span>
          <span className="text-xs text-green-500">Posts</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-xl font-bold text-green-700">
            {alumniProfile.messages}
          </span>
          <span className="text-xs text-green-500">Messages</span>
        </div>
      </div>
    </div>
  </div>
);

export default AlumniProfileSection;
