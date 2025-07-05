import React from "react";
import { FaUserFriends, FaEnvelope, FaUserGraduate, FaRegCommentDots, FaArrowUp, FaArrowDown } from "react-icons/fa";

const stats = [
  {
    label: "Alumni Connected",
    value: 3,
    icon: <FaUserFriends className="text-blue-500 text-3xl" />,
    color: "bg-gradient-to-br from-blue-100 to-blue-200",
    trend: "up",
    change: "+1 this week",
  },
  {
    label: "Messages Sent",
    value: 12,
    icon: <FaEnvelope className="text-indigo-500 text-3xl" />,
    color: "bg-gradient-to-br from-indigo-100 to-indigo-200",
    trend: "up",
    change: "+3 this week",
  },
  {
    label: "Posts Made",
    value: 2,
    icon: <FaUserGraduate className="text-green-500 text-3xl" />,
    color: "bg-gradient-to-br from-green-100 to-green-200",
    trend: "down",
    change: "-1 this week",
  },
  {
    label: "Q&A Participation",
    value: 5,
    icon: <FaRegCommentDots className="text-pink-500 text-3xl" />,
    color: "bg-gradient-to-br from-pink-100 to-pink-200",
    trend: "up",
    change: "+2 this week",
  },
];

const StatsInsightsSection = () => (
  <div className="w-full flex justify-center p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
      {stats.map((stat, idx) => (
        <div key={idx} className={`relative flex flex-col items-center justify-center rounded-2xl shadow-xl p-7 ${stat.color} group overflow-hidden border border-blue-100 hover:scale-105 transition-transform duration-200 min-w-[180px]`}>
          <div className="absolute right-3 top-3 opacity-20 text-6xl pointer-events-none select-none">{stat.icon}</div>
          <div className="z-10 flex flex-col items-center">
            <div className="text-4xl font-extrabold text-indigo-800 mt-2 drop-shadow">{stat.value}</div>
            <div className="text-base text-blue-700 font-semibold mt-1 text-center">{stat.label}</div>
            <div className={`flex items-center gap-1 mt-2 text-xs font-bold ${stat.trend === "up" ? "text-green-600" : "text-red-500"}`}>
              {stat.trend === "up" ? <FaArrowUp /> : <FaArrowDown />} {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsInsightsSection;
