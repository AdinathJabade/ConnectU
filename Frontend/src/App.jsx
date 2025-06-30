import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CompanyLogosSection from "./components/CompanyLogosSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import ImpactSection from "./components/ImpactSection";
import FAQSection from "./components/FAQSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300 text-gray-800">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <HeroSection />
      <CompanyLogosSection />
      <AboutSection />
      <ImpactSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <TeamSection />
      <CTABanner />
      <Footer />
      {/* Main content will go here */}
    </div>
  );
}

export default App;
