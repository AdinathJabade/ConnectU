import React from "react";
import { Routes, Route } from "react-router-dom";
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
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import AlumniDashboard from "./pages/dashboards/AlumniDashboard";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import TPODashboard from "./pages/dashboards/TPODashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
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
          </>
        }
      />
      <Route path="/dashboard/student" element={<StudentDashboard />} />
      <Route path="/dashboard/alumni" element={<AlumniDashboard />} />
      <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
      <Route path="/dashboard/tpo" element={<TPODashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
