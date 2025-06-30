import React from "react";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Sign Up",
		description:
			"Create your account as a Student, Alumni, Teacher, or TPO in seconds.",
	},
	{
		title: "Build Your Profile",
		description:
			"Add your details, connect with your campus community, and showcase your achievements.",
	},
	{
		title: "Explore & Connect",
		description:
			"Find opportunities, network, and collaborate with others on the platform.",
	},
];

const HowItWorksSection = () => (
	<section
		id="how-it-works"
		className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex flex-col items-center text-center px-4 md:px-8"
	>
		<motion.h2
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
			className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-8"
		>
			How It Works
		</motion.h2>
		<div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
			{steps.map((step, idx) => (
				<motion.div
					key={step.title}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: idx * 0.2 }}
					className="bg-white border border-blue-100 rounded-xl shadow-md p-6 md:p-8 w-full md:w-72 flex flex-col items-center"
				>
					<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4 border border-blue-200">
						{idx + 1}
					</div>
					<h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">
						{step.title}
					</h3>
					<p className="text-blue-600 text-base md:text-lg">
						{step.description}
					</p>
				</motion.div>
			))}
		</div>
	</section>
);

export default HowItWorksSection;
