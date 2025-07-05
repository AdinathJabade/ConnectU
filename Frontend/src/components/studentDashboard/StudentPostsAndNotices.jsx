import React from "react";

// Example posts and notices data
const posts = [
  { author: "Priya Sharma (Alumni)", content: "Excited to share a new job opening at Microsoft!", time: "2h ago" },
  { author: "Amit Patel (Alumni)", content: "Tips for cracking Google interviews posted in the resources section.", time: "5h ago" },
];
const notices = [
  { by: "TPO", content: "Campus drive by Infosys on 10th July.", time: "1h ago" },
  { by: "Teacher", content: "Project submission deadline extended to 15th July.", time: "3h ago" },
];

const StudentPostsAndNotices = () => (
  <div className="space-y-8 w-full">
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-bold text-lg text-indigo-700 mb-4">Posts by Alumni</h3>
      <ul className="space-y-4">
        {posts.map((post, idx) => (
          <li key={idx} className="border-b border-blue-50 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-blue-800">{post.author}</span>
              <span className="text-xs text-blue-400">{post.time}</span>
            </div>
            <p className="text-blue-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-bold text-lg text-indigo-700 mb-4">Recent Notices</h3>
      <ul className="space-y-4">
        {notices.map((notice, idx) => (
          <li key={idx} className="border-b border-blue-50 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-indigo-700">{notice.by}</span>
              <span className="text-xs text-blue-400">{notice.time}</span>
            </div>
            <p className="text-blue-700">{notice.content}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default StudentPostsAndNotices;
