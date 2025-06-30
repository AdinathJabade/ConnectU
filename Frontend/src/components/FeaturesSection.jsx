import React from "react";
import { FaUserGraduate, FaLock, FaUsers, FaBullhorn } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
	{
		icon: <FaUserGraduate className="text-blue-600 text-3xl mb-2" />,
		title: "Role-based Access",
		desc: "Students, Alumni, Teachers, and TPOs each get a tailored experience.",
	},
	{
		icon: <FaLock className="text-blue-600 text-3xl mb-2" />,
		title: "Secure Authentication",
		desc: "Your data and privacy are protected with robust security.",
	},
	{
		icon: <FaUsers className="text-blue-600 text-3xl mb-2" />,
		title: "Easy Networking",
		desc: "Connect, share, and grow your campus network effortlessly.",
	},
	{
		icon: <FaBullhorn className="text-blue-600 text-3xl mb-2" />,
		title: "Opportunities & Announcements",
		desc: "Stay updated with the latest campus news and opportunities.",
	},
];

const FeaturesSection = () => (
	<section
		id="features"
		className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex flex-col items-center px-4 md:px-8"
	>
		<motion.h2
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
			className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-12 drop-shadow-lg"
		>
			Why ConnectU?
		</motion.h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
			{features.map((f, i) => (
				<motion.div
					key={f.title}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: i * 0.15 }}
					className="bg-white border border-blue-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out"
					whileHover={{ y: -8, scale: 1.07 }}
				>
					{f.icon}
					<h3 className="font-semibold text-base md:text-lg text-blue-700 mb-2 mt-2">
						{f.title}
					</h3>
					<p className="text-gray-600 text-sm md:text-base">{f.desc}</p>
				</motion.div>
			))}
		</div>
	</section>
);

export default FeaturesSection;
