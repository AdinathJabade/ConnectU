import React, { useState } from "react";
import { FaQuestionCircle, FaPaperPlane } from "react-icons/fa";

const demoQA = [
	{ from: "Student", text: "How do I prepare for campus placements?" },
	{
		from: "Alumni",
		text: "Focus on coding practice, mock interviews, and networking with seniors. Use LeetCode and attend workshops!",
	},
	{ from: "Student", text: "What are some good projects for my resume?" },
	{
		from: "Alumni",
		text: "Build a portfolio site, contribute to open source, or create a real-world app (e.g., event manager, chat app).",
	},
];

const CommonMessagingSection = () => {
	const [messages, setMessages] = useState(demoQA);
	const [input, setInput] = useState("");

	const handleSend = () => {
		if (input.trim()) {
			setMessages([...messages, { from: "You", text: input }]);
			setInput("");
		}
	};

	return (
		<div className="p-2 sm:p-4 md:p-6 w-full max-w-full min-h-screen">
			<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-700 mb-2 sm:mb-4 flex items-center gap-2">
				<FaQuestionCircle className="text-blue-500" /> Common Q&amp;A / Group
				Chat
			</h2>
			<div className="bg-white rounded-xl shadow-md p-2 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-4">
				<div className="text-blue-700 mb-1 sm:mb-2 text-xs sm:text-sm">
					<strong>Welcome to the ConnectU Q&amp;A!</strong> Ask questions, share
					advice, and discuss topics with students, alumni, and teachers. Use this
					space for career guidance, interview tips, campus life, and more.
				</div>
				<div className="bg-indigo-50 rounded-lg p-2 sm:p-4 overflow-y-auto text-xs sm:text-sm">
					{messages.map((msg, i) => (
						<div
							key={i}
							className={
								msg.from === "You"
									? "text-right"
									: "text-left"
							}
						>
							<span
								className={
									msg.from === "You"
										? "font-bold text-blue-700"
										: msg.from === "Alumni"
										? "font-bold text-green-700"
										: "font-bold text-indigo-700"
								}
							>
								{msg.from}:
							</span>{" "}
							{msg.text}
						</div>
					))}
				</div>
				<div className="flex flex-col sm:flex-row gap-2 mt-2">
					<input
						type="text"
						className="flex-1 px-3 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm"
						placeholder="Type your question or message..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSend();
						}}
					/>
					<button
						className="w-full sm:w-auto px-3 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-1 text-xs sm:text-sm"
						onClick={handleSend}
						type="button"
					>
						<FaPaperPlane />
					</button>
				</div>
				<div className="mt-2 text-xs text-blue-400">
					(Demo: In production, this would be a real-time group chat or forum.)
				</div>
			</div>
		</div>
	);
};

export default CommonMessagingSection;
