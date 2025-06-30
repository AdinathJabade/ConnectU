import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Users Joined", value: 12000 },
  { label: "Connections Made", value: 35000 },
  { label: "Opportunities Shared", value: 5000 },
  { label: "Campuses Connected", value: 120 },
];

const ImpactSection = () => (
  <section id="impact" className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center text-center relative overflow-hidden px-4 md:px-8">
    {/* Decorative SVG background - more visible */}
    <svg className="absolute left-0 top-0 w-60 md:w-96 h-60 md:h-96 opacity-50 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="180" fill="#3B82F6" fillOpacity="0.18" />
      <circle cx="120" cy="80" r="60" fill="#6366F1" fillOpacity="0.16" />
    </svg>
    <svg className="absolute right-0 bottom-0 w-80 md:w-[30rem] h-80 md:h-[30rem] opacity-40 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="100" width="200" height="200" rx="100" fill="#6366F1" fillOpacity="0.18" />
      <circle cx="320" cy="320" r="50" fill="#3B82F6" fillOpacity="0.14" />
    </svg>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-8 relative z-10">Our Impact</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl w-full relative z-10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-extrabold text-blue-700 mb-2">
            <CountUp start={0} end={stat.value} duration={6} separator="," enableScrollSpy scrollSpyOnce />+
          </span>
          <span className="text-blue-600 text-base md:text-lg font-semibold">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ImpactSection;
