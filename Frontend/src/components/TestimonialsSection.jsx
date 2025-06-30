import React from "react";
import { motion } from "framer-motion";

const testimonials = [
	{
		name: "Aarav S.",
		role: "Student",
		text: "ConnectU made it so easy to find mentors and opportunities. The community is amazing!",
	},
	{
		name: "Priya K.",
		role: "Alumni",
		text: "I love giving back to my alma mater and connecting with current students. Highly recommended!",
	},
	{
		name: "Mr. Sharma",
		role: "Teacher",
		text: "A fantastic platform for teachers to guide and support students beyond the classroom.",
	},
];

const TestimonialsSection = () => (
	<section
		id="testimonials"
		className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex flex-col items-center text-center px-4 md:px-8"
	>
		<motion.h2
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
			className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-8"
		>
			What Our Users Say
		</motion.h2>
		<div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
			{testimonials.map((t, idx) => (
				<motion.div
					key={t.name}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: idx * 0.2 }}
					className="bg-white border border-blue-100 rounded-xl shadow-lg p-6 md:p-8 w-full md:w-80 flex flex-col items-center"
				>
					<div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4 border border-blue-200">
						{t.name[0]}
					</div>
					<p className="text-blue-700 italic mb-4 text-base md:text-lg">
						"{t.text}"
					</p>
					<span className="text-blue-500 font-semibold">{t.name}</span>
					<span className="text-blue-400 text-sm">{t.role}</span>
				</motion.div>
			))}
		</div>
	</section>
);

export default TestimonialsSection;
