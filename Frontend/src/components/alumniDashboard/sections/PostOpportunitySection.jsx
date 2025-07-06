import React, { useState } from "react";

const PostOpportunitySection = () => {
  const [gallery, setGallery] = useState([]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setGallery((prev) => [...prev, ...files]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl mx-auto">
      <h3 className="font-bold text-xl text-green-700 mb-4">Post an Opportunity</h3>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Opportunity Title" className="px-4 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
        <textarea placeholder="Description" className="px-4 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]" />
        <input type="text" placeholder="Company Name" className="px-4 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="text" placeholder="Location" className="px-4 py-2 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
        <div>
          <label className="block text-sm font-semibold text-green-700 mb-1">Gallery Photos</label>
          <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mb-2" />
          <div className="flex flex-wrap gap-2">
            {gallery.map((file, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(file)}
                alt={`gallery-${idx}`}
                className="w-20 h-20 object-cover rounded border border-green-200 shadow"
              />
            ))}
          </div>
        </div>
        <button type="submit" className="py-2 rounded bg-gradient-to-r from-green-500 to-blue-700 text-white font-semibold hover:from-green-600 hover:to-blue-800 transition">Post Opportunity</button>
      </form>
    </div>
  );
};

export default PostOpportunitySection;
