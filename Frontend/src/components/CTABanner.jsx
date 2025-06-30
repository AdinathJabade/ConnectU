import React from "react";
import { motion } from "framer-motion";

const CTABanner = () => (
  <section className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 py-12 flex flex-col items-center justify-center text-center relative z-10 px-4 md:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg"
    >
      Ready to join the ConnectU community?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-base md:text-lg lg:text-xl text-indigo-100 mb-8 max-w-2xl"
    >
      Sign up now and unlock a world of campus connections, opportunities, and growth.
    </motion.p>
    <motion.a
      href="/signup"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white text-indigo-700 font-bold shadow-lg hover:bg-indigo-50 hover:text-indigo-900 transition text-base md:text-lg"
    >
      Get Started
    </motion.a>
  </section>
);

export default CTABanner;
