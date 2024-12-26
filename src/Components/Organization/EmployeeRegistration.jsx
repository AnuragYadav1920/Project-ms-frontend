import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { Components } from "../../Imports/Components.js";
const EmpReg = () => {
  const [openSideLinkBox, setOpenSideLinkBox] = useState(false);

  return (
    <>
      <div className="mb-32">
        <div className="registration-heading text-center text-5xl font-bold text-slate-400 py-8">
          Employee Registration
        </div>
        <div>
          <div className="account-details-menu p-2 backdrop-brightness-90 inline-block">
            <RiMenu3Fill className="text-xl text-yellow-600 font-bold" onClick={() => setOpenSideLinkBox(!openSideLinkBox)} />
          </div>
          {openSideLinkBox && (
            <Components.SidebarLinkBox
              data={[
                { link: "Personal Details", urlParams: "personal-details" },
                { link: "Academic Details", urlParams: "academic-details" },
                { link: "Experience Details", urlParams: "experience-details" },
                { link: "Skills Details", urlParams: "skills-details" },
                { link: "Contact Details", urlParams: "contact-details" },
                { link: "Address Details", urlParams: "address-details" },
              ]}
            />
          )}
        </div>
        <div className="employee-registration-details-links flex flex-wrap gap-4 text-center text-nowrap text-slate-400 font-thin py-8 justify-center">
          <NavLink
            to="personal-details"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Personal Details
          </NavLink>
          <NavLink
            to="academic-details"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Academic Details
          </NavLink>
          <NavLink
            to="experience-details"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Experience Details
          </NavLink>
          <NavLink
            to="skills-details"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Skills Details
          </NavLink>
          <NavLink
            to="contact-details"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Contact Details
          </NavLink>
          <NavLink
            to="address-details"
            className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600"
          >
            Address Details
          </NavLink>
        </div>
        <div className="py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default EmpReg;
