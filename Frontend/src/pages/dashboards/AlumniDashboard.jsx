import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaUser, FaComments, FaQuestion, FaBriefcase, FaClipboardList, FaRegUserCircle, FaHeart, FaRegComment, FaBars } from "react-icons/fa";
import AlumniDirectorySection from "../../components/alumniDashboard/sections/AlumniDirectorySection";
import StudentDirectorySection from "../../components/studentDashboard/sections/StudentDirectorySection";
import PostOpportunitySection from "../../components/alumniDashboard/sections/PostOpportunitySection";
import AlumniProfileSection from "../../components/alumniDashboard/sections/AlumniProfileSection";
import AlumniDashboardSearchBar from "../../components/alumniDashboard/AlumniDashboardSearchBar";
import AlumniDashboardFilter from "../../components/alumniDashboard/AlumniDashboardFilter";
import StudentDashboardFilter from "../../components/studentDashboard/StudentDashboardFilter";
import CommonMessagingSection from "../../components/studentDashboard/sections/CommonMessagingSection";
import DirectMessagingSection from "../../components/studentDashboard/sections/DirectMessagingSection";
import { ConnectedStudentsSection, ConnectedAlumniSection } from "../../components/studentDashboard/sections/ConnectedStudentsSection";
import GiveButton from "../../components/alumniDashboard/GiveButton";
import CommonPostsSection from "../../components/alumniDashboard/sections/CommonPostsSection";
import PersonalPostsSection from "../../components/alumniDashboard/sections/PersonalPostsSection";

const SECTION = {
  STUDENT_DIRECTORY: "student_directory",
  ALUMNI_DIRECTORY: "alumni_directory",
  POST_OPPORTUNITY: "post_opportunity",
  COMMON_MSG: "common_msg",
  DIRECT_MSG: "direct_msg",
  PROFILE: "profile",
  CONNECTED_STUDENTS: "connected_students",
  COMMON_POSTS: "common_posts",
  PERSONAL_POSTS: "personal_posts"
};

const AlumniDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ skills: "", branch: "" });
  const [alumniName] = useState("Amit Patel"); // Replace with actual logged-in alumni name
  const [connectedStudents, setConnectedStudents] = useState([]);
  const [connectedAlumni, setConnectedAlumni] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handler for search and filter (to be passed to StudentDirectorySection)
  const handleSearch = (e) => setSearch(e.target.value);
  const handleFilter = (field, value) => setFilter(f => ({ ...f, [field]: value }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between bg-white shadow-md px-4 sm:px-6 py-3 sticky top-0 z-30 border-b border-green-100">
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-full hover:bg-green-50 transition"
            onClick={() => { navigate("/"); }}
            title="Go to Homepage"
          >
            <FaHome className="text-2xl text-green-700" />
          </button>
          <button
            className="font-extrabold text-2xl text-green-700 tracking-wider select-none focus:outline-none bg-transparent border-none cursor-pointer"
            style={{ background: "none", border: "none", padding: 0 }}
            onClick={() => { setActiveSection(null); }}
            title="Go to Student Directory"
          >
            ConnectU
          </button>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-4">
          <GiveButton onClick={() => setActiveSection(SECTION.CONNECTED_STUDENTS)} />
          <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection(SECTION.ALUMNI_DIRECTORY)} title="Alumni"><FaUsers className="text-xl text-green-700" /></button>
          <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection(SECTION.COMMON_POSTS)} title="Common Posts"><FaClipboardList className="text-xl text-green-700" /></button>
          <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection(SECTION.PERSONAL_POSTS)} title="Personal Posts"><FaRegUserCircle className="text-xl text-green-700" /></button>
          <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection(SECTION.POST_OPPORTUNITY)} title="Post Opportunity"><FaBriefcase className="text-xl text-green-700" /></button>
          <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection(SECTION.COMMON_MSG)} title="Q&A"><FaQuestion className="text-xl text-green-700" /></button>
          <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection(SECTION.DIRECT_MSG)} title="Direct Message"><FaComments className="text-xl text-green-700" /></button>
          <button className="p-2 rounded-full hover:bg-green-50 transition" onClick={() => setActiveSection(SECTION.PROFILE)} title="Profile"><FaUser className="text-2xl text-green-700" /></button>
        </div>
        {/* Mobile/Tablet Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-full hover:bg-green-50 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Menu"
          >
            <FaBars className="text-2xl text-green-700" />
          </button>
        </div>
      </nav>
      {/* Mobile/Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end md:hidden">
          <div className="w-64 bg-white h-full shadow-xl flex flex-col p-6 gap-4">
            <button className="self-end mb-4 text-2xl text-gray-500 hover:text-green-700" onClick={() => setMobileMenuOpen(false)}>&times;</button>
            <GiveButton onClick={() => { setActiveSection(SECTION.CONNECTED_STUDENTS); setMobileMenuOpen(false); }} />
            <button className="p-2 rounded hover:bg-green-50 transition flex items-center gap-2" onClick={() => { setActiveSection(SECTION.ALUMNI_DIRECTORY); setMobileMenuOpen(false); }}><FaUsers className="text-xl text-green-700" /> Alumni</button>
            <button className="p-2 rounded hover:bg-green-50 transition flex items-center gap-2" onClick={() => { setActiveSection(SECTION.COMMON_POSTS); setMobileMenuOpen(false); }}><FaClipboardList className="text-xl text-green-700" /> Common Posts</button>
            <button className="p-2 rounded hover:bg-green-50 transition flex items-center gap-2" onClick={() => { setActiveSection(SECTION.PERSONAL_POSTS); setMobileMenuOpen(false); }}><FaRegUserCircle className="text-xl text-green-700" /> Personal Posts</button>
            <button className="p-2 rounded hover:bg-green-50 transition flex items-center gap-2" onClick={() => { setActiveSection(SECTION.POST_OPPORTUNITY); setMobileMenuOpen(false); }}><FaBriefcase className="text-xl text-green-700" /> Post Opportunity</button>
            <button className="p-2 rounded hover:bg-green-50 transition flex items-center gap-2" onClick={() => { setActiveSection(SECTION.COMMON_MSG); setMobileMenuOpen(false); }}><FaQuestion className="text-xl text-green-700" /> Q&A</button>
            <button className="p-2 rounded hover:bg-green-50 transition flex items-center gap-2" onClick={() => { setActiveSection(SECTION.DIRECT_MSG); setMobileMenuOpen(false); }}><FaComments className="text-xl text-green-700" /> Direct Message</button>
            <button className="p-2 rounded hover:bg-green-50 transition flex items-center gap-2" onClick={() => { setActiveSection(SECTION.PROFILE); setMobileMenuOpen(false); }}><FaUser className="text-2xl text-green-700" /> Profile</button>
          </div>
        </div>
      )}
      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-10 px-4 md:px-8 flex flex-col gap-8">
        {/* Student Directory is the default view */}
        {(!activeSection || activeSection === SECTION.STUDENT_DIRECTORY) && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <StudentDashboardFilter filter={filter} onChange={handleFilter} />
            </div>
            <div className="flex-1">
              <StudentDirectorySection search={search} filter={filter} alumniName={alumniName} onConnectChange={setConnectedStudents} />
            </div>
          </div>
        )}
        {activeSection === SECTION.ALUMNI_DIRECTORY && <AlumniDirectorySection isAlumni={true} onAlumniConnectChange={setConnectedAlumni} />}
        {activeSection === SECTION.POST_OPPORTUNITY && <PostOpportunitySection />}
        {activeSection === SECTION.COMMON_MSG && <CommonMessagingSection />}
        {activeSection === SECTION.DIRECT_MSG && <DirectMessagingSection />}
        {activeSection === SECTION.PROFILE && <AlumniProfileSection />}
        {activeSection === SECTION.CONNECTED_STUDENTS && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <ConnectedStudentsSection connectedStudents={connectedStudents} />
            </div>
            <div className="flex-1">
              <ConnectedAlumniSection connectedAlumni={connectedAlumni} />
            </div>
          </div>
        )}
        {activeSection === SECTION.COMMON_POSTS && <CommonPostsSection />}
        {activeSection === SECTION.PERSONAL_POSTS && <PersonalPostsSection />}
      </div>
    </div>
  );
};

export default AlumniDashboard;
