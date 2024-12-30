import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { Components } from "../../Imports/Components.js";

const ProjectRegistration = () => {
  const [openSideLinkBox, setOpenSideLinkBox] = useState(false);
  return (
    <>
      <div className="mb-32">
        <div className="registration-heading text-center text-5xl font-bold text-slate-400 py-8">
          Project Registration
        </div>
        <div>
          <div className="account-details-menu p-2 backdrop-brightness-90 inline-block">
            <RiMenu3Fill className="text-xl text-yellow-600 font-bold" onClick={() => setOpenSideLinkBox(!openSideLinkBox)} />
          </div>
            {openSideLinkBox && (
              <Components.SidebarLinkBox
                data={[
                  { link: "Basic Details", urlParams: "basic-details" },
                  { link: "Description", urlParams: "description" },
                  { link: "Timeline", urlParams: "timeline" },
                  { link: "Team", urlParams: "team-information" },
                  { link: "Resources", urlParams: "resources" },
                  { link: "Status", urlParams: "status" },
                ]}
              />
            )}
        </div>
        <div className="employee-registration-details-links flex flex-wrap gap-4 text-center text-nowrap text-slate-400 font-thin py-8 justify-center">
          <NavLink
            to="basic-details"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Basic Details
          </NavLink>
          <NavLink
            to="description"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Description
          </NavLink>
          <NavLink
            to="timeline"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Timeline
          </NavLink>
          <NavLink
            to="team-information"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Team Members
          </NavLink>
          <NavLink
            to="status"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Status
          </NavLink>
        </div>
        <div className="py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ProjectRegistration;
