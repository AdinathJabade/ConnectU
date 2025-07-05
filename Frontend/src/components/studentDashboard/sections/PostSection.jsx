import React, { useState } from "react";
import { FaUserGraduate, FaRegClock, FaHeart, FaCommentDots, FaShare, FaImage } from "react-icons/fa";

// Example posts data
const initialPosts = [
  {
    author: "Priya Sharma (Alumni)",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Excited to share a new job opening at Microsoft!",
    time: "2h ago",
    image: "",
  },
  {
    author: "Amit Patel (Alumni)",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Tips for cracking Google interviews posted in the resources section.",
    time: "5h ago",
    image: "",
  },
];

const PostSection = ({ isAlumni = false }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(""); // Fix: Always treat imagePreview as a string (empty string for no image)

  const handleImageChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview("");
    }
  };

  const handlePost = e => {
    e.preventDefault();
    if (!newContent && !newImage) return;
    const newPost = {
      author: "You (Alumni)",
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg", // Placeholder
      content: newContent,
      time: "Just now",
      image: imagePreview,
    };
    setPosts([newPost, ...posts]);
    setNewContent("");
    setNewImage(null);
    setImagePreview("");
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-8 p-2 sm:p-4 md:p-6 w-full max-w-full">
      {/* Post form only for alumni */}
      {isAlumni && (
        <form onSubmit={handlePost} className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-2xl p-3 sm:p-6 md:p-8 mb-4 flex flex-col gap-3 sm:gap-4 border border-blue-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="avatar" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-blue-300 object-cover shadow" />
            <span className="font-bold text-indigo-800 text-base sm:text-lg">You (Alumni)</span>
          </div>
          <textarea
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
            placeholder="Share an update, opportunity, or experience..."
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none min-h-[60px] sm:min-h-[70px] bg-white text-blue-800 text-sm sm:text-base shadow-sm"
          />
          {imagePreview !== "" && (
            <div className="relative w-fit mb-2">
              <img src={imagePreview} alt="Preview" className="max-h-32 sm:max-h-48 rounded-xl border-2 border-blue-200 shadow-lg" />
              <button type="button" onClick={() => { setNewImage(null); setImagePreview(""); }} className="absolute top-1 right-1 bg-white rounded-full p-1 shadow text-red-500 hover:text-red-700 text-lg">&times;</button>
            </div>
          )}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mt-2">
            <label className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-700 font-semibold bg-blue-50 px-3 py-2 rounded-lg shadow-sm border border-blue-200 transition w-full sm:w-auto justify-center">
              <FaImage />
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              Add Image
            </label>
            <button type="submit" className="w-full sm:w-auto px-6 sm:px-8 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-bold shadow-lg hover:from-blue-600 hover:to-indigo-800 transition text-base sm:text-lg flex items-center justify-center">Post</button>
          </div>
        </form>
      )}
      {/* Posts list */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl shadow-2xl p-3 sm:p-6 md:p-8 border border-blue-100">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-indigo-800 mb-4 sm:mb-10 flex items-center gap-2 sm:gap-4 tracking-tight">
          <FaUserGraduate className="text-blue-500 text-2xl sm:text-4xl" /> Alumni Posts
        </h3>
        <ul className="space-y-6 sm:space-y-10">
          {posts.slice(0, 5).map((post, idx) => (
            <li key={idx} className="flex flex-col md:flex-row gap-4 sm:gap-7 items-start bg-white rounded-2xl shadow-xl p-4 sm:p-8 hover:shadow-2xl transition border border-blue-100 group relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 sm:w-2 bg-gradient-to-b from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition"></div>
              <img
                src={post.avatar}
                alt={post.author}
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-blue-200 shadow-lg mt-1"
              />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="font-bold text-blue-800 text-base sm:text-xl">{post.author}</span>
                  <span className="flex items-center text-xs text-blue-400 gap-1"><FaRegClock /> {post.time}</span>
                </div>
                <p className="text-blue-700 text-sm sm:text-lg mb-2 sm:mb-4 leading-relaxed">{post.content}</p>
                {post.image !== "" && (
                  <img src={post.image} alt="Post" className="max-h-40 sm:max-h-72 rounded-xl border border-blue-100 shadow mb-2 sm:mb-4" />
                )}
                <div className="flex gap-4 sm:gap-8 mt-2">
                  <button className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-bold text-sm sm:text-base transition"><FaHeart /> Like</button>
                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-bold text-sm sm:text-base transition"><FaCommentDots /> Comment</button>
                  <button className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-bold text-sm sm:text-base transition"><FaShare /> Share</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {posts.length > 5 && (
          <div className="mt-6 sm:mt-8 max-h-64 sm:max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
            <ul className="space-y-6 sm:space-y-10">
              {posts.slice(5).map((post, idx) => (
                <li key={idx + 5} className="flex flex-col md:flex-row gap-4 sm:gap-7 items-start bg-white rounded-2xl shadow-xl p-4 sm:p-8 hover:shadow-2xl transition border border-blue-100 group relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 sm:w-2 bg-gradient-to-b from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition"></div>
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-blue-200 shadow-lg mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <span className="font-bold text-blue-800 text-base sm:text-xl">{post.author}</span>
                      <span className="flex items-center text-xs text-blue-400 gap-1"><FaRegClock /> {post.time}</span>
                    </div>
                    <p className="text-blue-700 text-sm sm:text-lg mb-2 sm:mb-4 leading-relaxed">{post.content}</p>
                    {post.image !== "" && (
                      <img src={post.image} alt="Post" className="max-h-40 sm:max-h-72 rounded-xl border border-blue-100 shadow mb-2 sm:mb-4" />
                    )}
                    <div className="flex gap-4 sm:gap-8 mt-2">
                      <button className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-bold text-sm sm:text-base transition"><FaHeart /> Like</button>
                      <button className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-bold text-sm sm:text-base transition"><FaCommentDots /> Comment</button>
                      <button className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-bold text-sm sm:text-base transition"><FaShare /> Share</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostSection;
