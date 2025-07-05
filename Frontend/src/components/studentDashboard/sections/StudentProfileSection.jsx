import React from "react";

const StudentProfileSection = () => (
  <div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 w-full">
    <div className="bg-gradient-to-br from-indigo-100 to-blue-50 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 flex flex-col items-center w-full max-w-lg border border-blue-200 relative">
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <button className="px-2 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition">
          Edit
        </button>
      </div>
      <div className="relative mb-2 sm:mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-blue-300 object-cover shadow-lg"
        />
        <span className="absolute bottom-1 right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 border-2 border-white rounded-full"></span>
      </div>
      <h2 className="text-lg sm:text-2xl font-extrabold text-indigo-800 mb-1 tracking-tight text-center">
        John Doe
      </h2>
      <p className="text-blue-600 mb-1 font-medium text-xs sm:text-base text-center">
        john.doe@email.com
      </p>
      <p className="text-gray-500 mb-4 text-xs sm:text-base text-center">
        B.Tech, Computer Science{" "}
        <span className="mx-1">|</span> Batch of 2025
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 justify-center">
        <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold">
          React
        </span>
        <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold">
          Node.js
        </span>
        <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold">
          UI/UX
        </span>
      </div>
      <div className="flex gap-4 sm:gap-6 mt-2 w-full justify-center">
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-xl font-bold text-indigo-700">
            12
          </span>
          <span className="text-xs text-blue-500">Connections</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-xl font-bold text-indigo-700">5</span>
          <span className="text-xs text-blue-500">Posts</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-xl font-bold text-indigo-700">3</span>
          <span className="text-xs text-blue-500">Messages</span>
        </div>
      </div>
    </div>
  </div>
);

export default StudentProfileSection;
