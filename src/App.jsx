import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Services from "./Pages/Services/Services.jsx";
import Navbar from "./Components/Header/Navbar/Navbar.jsx";
import Login from "./Pages/Authentication/Login.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Account from "./Pages/Account/Account.jsx";
import Application from "./Components/Employee/Application.jsx";
import Profile from "./Components/Employee/Profile.jsx";
import Tasks from "./Components/Employee/Tasks.jsx";
import TrackApp from "./Components/Employee/TrackApp.jsx";
import EmpReg from "./Components/Organization/EmpReg.jsx";
import OrgDetails from "./Components/Organization/OrgDetails.jsx";
import ProjectReg from "./Components/Organization/ProjectReg.jsx";
import Projects from "./Components/Organization/Projects.jsx";
import Search from "./Components/Organization/Search.jsx";
import AcademicDetails from "./Components/Organization/EmployeeRegistration/AcademicDetails.jsx";
import AddressDetails from "./Components/Organization/EmployeeRegistration/AddressDetails.jsx";
import ContactDetails from "./Components/Organization/EmployeeRegistration/ContactDetails.jsx";
import ExperienceDetails from "./Components/Organization/EmployeeRegistration/ExperienceDetails.jsx";
import PersonalDetails from "./Components/Organization/EmployeeRegistration/PersonalDetails.jsx";
import SkillsDetails from "./Components/Organization/EmployeeRegistration/SkillsDetails.jsx";
import ProjectDetails from "./Components/Organization/ProjectRegistration/ProjectDetails.jsx";
import ProjectDescription from "./Components/Organization/ProjectRegistration/ProjectDescription.jsx";
import ProjectTimeline from "./Components/Organization/ProjectRegistration/ProjectTimeline.jsx";
import ProjectTeam from "./Components/Organization/ProjectRegistration/ProjectTeam.jsx";
import ProjectResources from "./Components/Organization/ProjectRegistration/ProjectResources.jsx";
import ProjectStatus from "./Components/Organization/ProjectRegistration/ProjectStatus.jsx";
import Planning from "./Components/Organization/AllProjects/Planning.jsx";
import Active from "./Components/Organization/AllProjects/Active.jsx";
import Completed from "./Components/Organization/AllProjects/Completed.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Account />}>
            {/* <Route index element={<Profile/>}/> */}
            <Route path="my-profile" element={<Profile />} />
            <Route path="my-tasks" element={<Tasks />} />
            <Route path="my-leaves" element={<Application />} />
            <Route path="my-applications" element={<TrackApp />} />
            <Route path="organization-details" element={<OrgDetails />} />
            <Route path="employee-registration" element={<EmpReg />}>
              <Route index element={<PersonalDetails />} />
              <Route path="personal-details" element={<PersonalDetails />} />
              <Route path="academic-details" element={<AcademicDetails />} />
              <Route path="contact-details" element={<ContactDetails />} />
              <Route
                path="experience-details"
                element={<ExperienceDetails />}
              />
              <Route path="address-details" element={<AddressDetails />} />
              <Route path="skills-details" element={<SkillsDetails />} />
            </Route>
            <Route path="project-registration" element={<ProjectReg />}>
              <Route index element={<ProjectDetails />} />
              <Route path="details" element={<ProjectDetails />} />
              <Route path="description" element={<ProjectDescription />} />
              <Route path="timeline" element={<ProjectTimeline />} />
              <Route path="team-information" element={<ProjectTeam />} />
              <Route path="resources" element={<ProjectResources />} />
              <Route path="status" element={<ProjectStatus />} />
            </Route>
            <Route path="projects" element={<Projects />}>
              <Route index element={<Planning/>}/>
              <Route path="planning" element={<Planning />} />
              <Route path="active" element={<Active />} />
              <Route path="completed" element={<Completed />} />
            </Route>
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
