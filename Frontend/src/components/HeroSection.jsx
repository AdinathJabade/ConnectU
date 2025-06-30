import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="w-full pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 flex flex-col items-center text-center relative overflow-hidden px-4 md:px-8">
    {/* Background video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      src="/backgroundVideo_of_HomePage.mp4"
    />
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-800 mb-4 drop-shadow-sm relative z-10"
    >
      ConnectU: Uniting Students, Alumni, Teachers & TPOs
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-base md:text-lg lg:text-xl text-blue-700 mb-8 max-w-2xl relative z-10"
    >
      A single platform for campus networking, opportunities, and growth.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
    >
      <a href="/signup" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-bold shadow-md hover:from-blue-600 hover:to-indigo-800 transition text-base md:text-lg">Get Started</a>
      <a href="#features" className="px-6 py-3 rounded-lg border border-blue-300 text-indigo-700 font-bold bg-white hover:bg-blue-50 transition text-base md:text-lg">Learn More</a>
    </motion.div>
  </section>
);

export default HeroSection;
