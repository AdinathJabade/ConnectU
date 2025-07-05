import React, { useState } from "react";
import StudentDashboardNavbar from "../../components/studentDashboard/StudentDashboardNavbar";
import PostSection from "../../components/studentDashboard/sections/PostSection";
import CommonMessagingSection from "../../components/studentDashboard/sections/CommonMessagingSection";
import DirectMessagingSection from "../../components/studentDashboard/sections/DirectMessagingSection";
import NotificationSection from "../../components/studentDashboard/sections/NotificationSection";
import StudentProfileSection from "../../components/studentDashboard/sections/StudentProfileSection";
import AlumniDirectorySection from "../../components/studentDashboard/sections/AlumniDirectorySection";

const SECTION = {
  POST: "post",
  COMMON_MSG: "common_msg",
  DIRECT_MSG: "direct_msg",
  NOTIFICATION: "notification",
  PROFILE: "profile",
  ALUMNI: "alumni",
};

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <StudentDashboardNavbar setActiveSection={setActiveSection} />
      <div className="max-w-6xl mx-auto mt-10 px-4 md:px-8 flex flex-col gap-8">
        {/* Main dashboard sections */}
        {!activeSection && <AlumniDirectorySection />}
        {activeSection === SECTION.POST && <PostSection />}
        {activeSection === SECTION.COMMON_MSG && <CommonMessagingSection />}
        {activeSection === SECTION.DIRECT_MSG && <DirectMessagingSection />}
        {activeSection === SECTION.NOTIFICATION && <NotificationSection />}
        {activeSection === SECTION.PROFILE && <StudentProfileSection />}
        {activeSection === SECTION.ALUMNI && <AlumniDirectorySection />}
      </div>
    </div>
  );
};

export default StudentDashboard;
