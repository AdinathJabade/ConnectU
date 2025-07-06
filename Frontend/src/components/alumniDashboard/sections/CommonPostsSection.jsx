import React, { useState } from "react";
import { FaHeart, FaRegComment, FaTimes } from "react-icons/fa";

const demoPosts = [
	{
		id: 1,
		user: {
			name: "Amit Patel",
			company: "Google",
			avatar: "https://randomuser.me/api/portraits/men/68.jpg",
		},
		title: "Frontend Developer Opportunity",
		description: "We are hiring frontend developers at Google. Apply now!",
		gallery: [
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=100&q=80",
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
		],
	},
	{
		id: 2,
		user: {
			name: "Priya Sharma",
			company: "Microsoft",
			avatar: "https://randomuser.me/api/portraits/women/67.jpg",
		},
		title: "AI Research Internship",
		description:
			"Excited to announce an AI research internship at Microsoft. Open to all branches!",
		gallery: [
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&q=80",
		],
	},
];

const CommonPostsSection = () => {
	const [modalImg, setModalImg] = useState(null);

	return (
		<div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl mx-auto">
			<h3 className="font-bold text-xl text-green-700 mb-4">
				All Alumni Common Posts
			</h3>
			<ul className="divide-y divide-green-100">
				{demoPosts.map((post) => (
					<li key={post.id} className="py-4">
						<div className="flex items-center gap-4 mb-2">
							<img
								src={post.user.avatar}
								alt={post.user.name}
								className="w-12 h-12 rounded-full object-cover border-2 border-green-200 shadow"
							/>
							<div>
								<span className="font-semibold text-green-800">
									{post.user.name}
								</span>
								<span className="ml-2 text-green-500 text-sm">
									{post.user.company}
								</span>
							</div>
						</div>
						<div className="font-semibold text-lg mb-1">{post.title}</div>
						<div className="text-gray-700 mb-2">{post.description}</div>
						<div className="flex gap-2 flex-wrap mb-2">
							{post.gallery.map((img, idx) => (
								<img
									key={idx}
									src={img}
									alt={`gallery${idx}`}
									className="w-20 h-20 object-cover rounded border border-green-200 shadow cursor-pointer"
									onClick={() => setModalImg(img)}
								/>
							))}
						</div>
						<div className="flex items-center gap-6 mt-2">
							<button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition">
								<FaHeart className="text-lg" />
								<span>Like</span>
							</button>
							<button className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition">
								<FaRegComment className="text-lg" />
								<span>Comment</span>
							</button>
						</div>
					</li>
				))}
			</ul>
			{modalImg && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
					<div className="relative flex items-center justify-center">
						<img
							src={modalImg}
							alt="large"
							className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl object-contain border-4 border-white"
							style={{
								background: "white",
								boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
							}}
						/>
						<button
							className="absolute -top-8 right-0 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition border-2 border-gray-300"
							onClick={() => setModalImg(null)}
							aria-label="Close"
							style={{ zIndex: 10 }}
						>
							<FaTimes className="text-2xl text-gray-700" />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CommonPostsSection;
