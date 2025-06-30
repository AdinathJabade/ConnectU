import React from "react";

const team = [
  {
    name: "Amit Patel",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sneha Joshi",
    role: "Community Manager",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TeamSection = () => (
  <section id="team" className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center text-center px-4 md:px-8">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-8">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full">
      {team.map((member) => (
        <div key={member.name} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 md:p-8">
          <img src={member.img} alt={member.name} className="w-20 md:w-24 h-20 md:h-24 rounded-full mb-4 border-4 border-blue-200 object-cover" />
          <h3 className="text-base md:text-lg font-bold text-blue-700 mb-1">{member.name}</h3>
          <span className="text-blue-500 text-xs md:text-sm">{member.role}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
