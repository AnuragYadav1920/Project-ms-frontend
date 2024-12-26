import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { Components } from "../../Imports/Components.js";

const Projects = () => {
  const [openSideLinkBox, setOpenSideLinkBox] = useState(false)
  return (
    <>
      <div className="mb-32">
        <div className="registration-heading text-center text-5xl font-bold text-slate-400 py-8">
          Projects
        </div>
        <div className="account-details-menu p-2 backdrop-brightness-90 inline-block">
          <RiMenu3Fill className="text-xl text-yellow-600 font-bold" onClick={()=>setOpenSideLinkBox(!openSideLinkBox)}/>
        </div>
          {
            openSideLinkBox&&(
              <Components.SidebarLinkBox
              data={[
                { link: "Planning", urlParams: "plannning" },
                { link: "Active", urlParams: "active" },
                { link: "Completed", urlParams: "completed" },
              ]}
            />
            )
          }
        <div className="employee-registration-details-links flex flex-wrap gap-4 text-center text-nowrap text-slate-400 font-thin py-8 justify-center">
          <NavLink
            to="planning"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Planning
          </NavLink>
          <NavLink
            to="active"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Active
          </NavLink>
          <NavLink
            to="completed"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Completed
          </NavLink>
        </div>
        <div className="py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Projects;
