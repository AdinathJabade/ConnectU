import React from "react";
import { FaBell, FaBullhorn, FaUserTie, FaUserGraduate } from "react-icons/fa";

const notifications = [
	{
		type: "notice",
		title: "Campus Placement Drive: Infosys",
		content: "Infosys is visiting campus on July 15th. Register by July 10th!",
		from: "TPO",
		icon: <FaBullhorn className="text-indigo-500" />,
		time: "2h ago",
	},
	{
		type: "message",
		title: "Alumni Webinar: Resume Building",
		content: "Join our alumni for a live session on resume building this Saturday.",
		from: "Alumni",
		icon: <FaUserGraduate className="text-green-500" />,
		time: "5h ago",
	},
	{
		type: "reminder",
		title: "Assignment Deadline",
		content: "Your Data Structures assignment is due tomorrow.",
		from: "Teacher",
		icon: <FaUserTie className="text-pink-500" />,
		time: "1d ago",
	},
	{
		type: "notice",
		title: "New Internship Opportunity",
		content: "Google Summer Internship applications are now open!",
		from: "TPO",
		icon: <FaBullhorn className="text-indigo-500" />,
		time: "2d ago",
	},
];

const NotificationSection = () => (
	<div className="p-2 sm:p-4 md:p-6 w-full max-w-full">
		<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-700 mb-2 sm:mb-4 flex items-center gap-2">
			<FaBell className="text-yellow-400" /> Recent Notices & Updates
		</h2>
		<div className="bg-white rounded-xl shadow-md p-2 sm:p-4 md:p-6">
			<ul className="divide-y divide-blue-100">
				{notifications.map((n, idx) => (
					<li
						key={idx}
						className="py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 hover:bg-indigo-50 rounded-lg px-2 transition"
					>
						<div className="text-xl sm:text-2xl mt-1">{n.icon}</div>
						<div className="flex-1">
							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-1">
								<span className="font-bold text-indigo-800 text-base sm:text-lg">
									{n.title}
								</span>
								<span className="text-xs text-blue-400">{n.time}</span>
							</div>
							<div className="text-blue-700 mb-1 text-xs sm:text-sm">{n.content}</div>
							<div className="text-xs text-blue-400">From: {n.from}</div>
						</div>
					</li>
				))}
			</ul>
			<div className="mt-2 sm:mt-4 text-xs text-blue-400">
				(Demo: In production, these would be fetched from the backend and could include actions or links.)
			</div>
		</div>
	</div>
);

export default NotificationSection;
