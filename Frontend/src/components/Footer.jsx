import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setEmail("");
  };

  return (
    <footer id="footer" className="w-full bg-gradient-to-br from-blue-900 via-indigo-950 to-indigo-900 text-indigo-100 pt-0 pb-6 mt-12 relative overflow-hidden px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 border-b border-indigo-800 pb-10">
        {/* About */}
        <div className="col-span-2">
          <h3 className="font-extrabold text-xl md:text-2xl mb-3 text-white tracking-wide">ConnectU</h3>
          <p className="text-indigo-200 text-sm md:text-base leading-relaxed mb-4">
            ConnectU unites Students, Alumni, Teachers, and TPOs on a single platform for networking, opportunities, and campus growth. Empower your academic journey and professional network with us.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition text-xl md:text-2xl hover:scale-125 duration-200"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-300 transition text-xl md:text-2xl hover:scale-125 duration-200"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500 transition text-xl md:text-2xl hover:scale-125 duration-200"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-400 transition text-xl md:text-2xl hover:scale-125 duration-200"><FaInstagram /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-base md:text-lg mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-indigo-200 text-sm md:text-base">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="/signup" className="hover:text-white transition">Sign Up</a></li>
            <li><a href="#footer" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h4 className="font-semibold text-base md:text-lg mb-3 text-white">Resources</h4>
          <ul className="space-y-2 text-indigo-200 text-sm md:text-base">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div>
          <h4 className="font-semibold text-base md:text-lg mb-3 text-white">Newsletter</h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="rounded-lg px-3 py-2 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={submitted}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900 text-white font-semibold rounded-lg px-3 py-2 transition shadow-lg text-sm md:text-base"
              disabled={submitted}
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
          <p className="text-xs text-indigo-300 mt-2">Get the latest updates and opportunities.</p>
        </div>
      </div>
      {/* Contact Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-blue-200 text-xs md:text-sm gap-2 px-0">
        <div className="flex items-center gap-2"><FaEnvelope /> support@connectu.com</div>
        <div className="flex items-center gap-2"><FaPhone /> +91 98765 43210</div>
        <div className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Campus Road, Mumbai, India</div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-2 text-blue-300 text-xs px-0">
        <span className="flex items-center gap-1"><FaRegCopyright /> {new Date().getFullYear()} ConnectU. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Made with <span className="text-pink-400">♥</span> for campus communities.</span>
      </div>
    </footer>
  );
};

export default Footer;
