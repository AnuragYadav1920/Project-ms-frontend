import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Components} from "../src/Imports/Components.js"
import{ Pages} from "../src/Imports/Pages.js"

const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Components.Navbar />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/services" element={<Pages.Services />} />
          <Route path="/contact" element={<Pages.Contact />} />
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/dashboard" element={<Pages.Account />}>
            {/* <Route index element={<Profile/>}/> */}
            <Route path="my-profile" element={<Components.Profile />} />
            <Route path="my-tasks" element={<Components.Tasks />} />
            <Route path="my-leaves" element={<Components.Application />} />
            <Route path="my-applications" element={<Components.TrackApplication />}/>            
            <Route path="organization-details" element={<Components.OrganizationDetails />} />
            <Route path="employee-registration" element={<Components.EmployeeRegistration />}>
              <Route index element={<Components.PersonalDetails />} />
              <Route path="personal-details" element={<Components.PersonalDetails />} />
              <Route path="academic-details" element={<Components.AcademicDetails />} />
              <Route path="contact-details" element={<Components.ContactDetails />} />
              <Route
                path="experience-details"
                element={<Components.ExperienceDetails />}
              />
              <Route path="address-details" element={<Components.AddressDetails />} />
              <Route path="skills-details" element={<Components.SkillsDetails />} />
            </Route>
            <Route path="project-registration" element={<Components.ProjectRegistration />}>
              <Route index element={<Components.ProjectDetails />} />
              <Route path="basic-details" element={<Components.ProjectDetails />} />
              <Route path="description" element={<Components.ProjectDescription />} />
              <Route path="timeline" element={<Components.ProjectTimeline />} />
              <Route path="team-information" element={<Components.ProjectTeam />} />
              <Route path="status" element={<Components.ProjectStatus />} />
            </Route>
            <Route path="projects" element={<Components.Projects />}>
              <Route path="planning" element={<Components.FilteredProjects />} />
            </Route>
            <Route path="search" element={<Components.Search />} />
          </Route>
          <Route path="view-application" element={<Components.ViewApplication/>}/>
        </Routes>
        <Components.Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
