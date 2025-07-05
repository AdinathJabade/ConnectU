import React, { useState } from "react";
import { FaComments, FaPaperPlane, FaUserFriends } from "react-icons/fa";

const connectedAlumni = [
	{
		name: "Amit Patel",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		company: "Google",
		email: "amit.patel@alumni.com",
	},
	{
		name: "Priya Sharma",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		company: "Microsoft",
		email: "priya.sharma@alumni.com",
	},
];

const DirectMessagingSection = () => {
	const [activeChat, setActiveChat] = useState(null);
	const [messages, setMessages] = useState([
		{
			from: "You",
			text: "Hi Priya, I would like to connect and ask a few questions!",
		},
		{
			from: "Priya Sharma (Alumni)",
			text: "Sure! Feel free to ask anything.",
		},
	]);
	const [input, setInput] = useState("");

	const handleSend = () => {
		if (input.trim() && activeChat) {
			setMessages([...messages, { from: "You", text: input }]);
			setInput("");
		}
	};

	return (
		<div className="p-2 sm:p-4 md:p-6 w-full max-w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-indigo-700 mb-4 flex items-center gap-3 tracking-tight">
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-2xl shadow-lg">
					<FaComments />
				</span>
				Direct Messaging
			</h2>
			<div className="flex flex-col md:flex-row gap-4 md:gap-6">
				{/* Sidebar: Connected Alumni List */}
				<div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-2xl shadow-xl p-2 sm:p-4 flex flex-col gap-2 border border-blue-100">
					<div className="mb-2 text-blue-700 font-bold text-base sm:text-lg flex items-center gap-2">
						<FaUserFriends className="text-blue-400" /> Connected Alumni
					</div>
					<div className="flex flex-col gap-2">
						{connectedAlumni.length === 0 && (
							<div className="text-blue-400">No connected alumni yet.</div>
						)}
						{connectedAlumni.map((alumni, idx) => (
							<button
								key={idx}
								onClick={() => {
									setActiveChat(alumni);
									setMessages([]);
								}}
								className={`flex items-center gap-3 p-2 rounded-xl border transition shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
									activeChat && activeChat.email === alumni.email
										? "bg-blue-100 border-blue-400"
										: "bg-white border-blue-100"
								}`}
							>
								<img
									src={alumni.avatar}
									alt={alumni.name}
									className="w-10 h-10 rounded-full border-2 border-blue-200 object-cover shadow"
								/>
								<div className="flex flex-col items-start">
									<span className="font-bold text-blue-800 text-sm sm:text-base">
										{alumni.name}
									</span>
									<span className="text-xs text-blue-500">
										{alumni.company}
									</span>
								</div>
							</button>
						))}
					</div>
				</div>
				{/* Main Chat Area */}
				<div className="flex-1 bg-white rounded-2xl shadow-xl p-2 sm:p-3 md:p-6 flex flex-col border border-blue-100 min-h-[350px] mt-4 md:mt-0">
					{activeChat ? (
						<>
							<div className="flex items-center gap-3 mb-4 border-b border-blue-100 pb-3">
								<img
									src={activeChat.avatar}
									alt={activeChat.name}
									className="w-12 h-12 rounded-full border-2 border-blue-200 object-cover shadow"
								/>
								<div>
									<div className="font-bold text-blue-800 text-lg">
										{activeChat.name}
									</div>
									<div className="text-xs text-blue-500">
										{activeChat.company}
									</div>
								</div>
							</div>
							<div className="flex-1 flex flex-col gap-2 max-h-40 sm:max-h-60 overflow-y-auto custom-scrollbar mb-4 px-1">
								{messages.length === 0 && (
									<div className="text-blue-400 text-center mt-8">
										Start your conversation!
									</div>
								)}
								{messages.map((msg, i) => (
									<div
										key={i}
										className={`flex ${
											msg.from === "You" ? "justify-end" : "justify-start"
										}`}
									>
										<div
											className={`max-w-[85vw] sm:max-w-[70%] px-4 py-2 rounded-2xl shadow text-xs sm:text-sm mb-1 ${
												msg.from === "You"
													? "bg-blue-500 text-white ml-auto"
													: "bg-blue-100 text-blue-900 mr-auto"
											}`}
										>
											{msg.text}
										</div>
									</div>
								))}
							</div>
							<div className="flex flex-col sm:flex-row gap-2 mt-auto pt-2 border-t border-blue-100">
								<input
									type="text"
									value={input}
									onChange={(e) => setInput(e.target.value)}
									placeholder={`Message ${
										activeChat && activeChat.name
									}...`}
									className="flex-1 px-4 py-2 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-800 bg-white shadow-sm text-xs sm:text-sm"
									onKeyDown={(e) => {
										if (e.key === "Enter") handleSend();
									}}
								/>
								<button
									className="w-full sm:w-auto px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow hover:from-blue-600 hover:to-indigo-800 transition flex items-center gap-2 text-base justify-center"
									onClick={handleSend}
									type="button"
								>
									<FaPaperPlane /> Send
								</button>
							</div>
						</>
					) : (
						<div className="flex flex-col items-center justify-center h-full text-blue-400">
							<FaComments className="text-5xl mb-2" />
							<span className="font-semibold">
								Select an alumni to start chatting
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DirectMessagingSection;
