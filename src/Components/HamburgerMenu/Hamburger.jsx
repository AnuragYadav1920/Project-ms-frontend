import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {IoClose} from "react-icons/io5"
import { FaCaretDown } from "react-icons/fa";

const Hamburger = ({ data = ["1", "2", "3"] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false)
  const [openDashBoardLinks, setOpenDashBoardLinks] = useState(false);
  return (
    <>
      <div className="w-60 min-h-80 bg-slate-500 font-thin text-md py-4 px-4 content-center ">
        <div className="inline">
          <IoClose className="text-3xl float-right cursor-pointer rounded-full hover:bg-slate-400"  onClick={()=>setOpenDashBoardLinks(false)}/>
        </div>
        <div className="mt-10">
        <div className="py-2 hover:bg-slate-950 hover:text-yellow-600 px-6">
          <NavLink to="/">Home</NavLink>
        </div>
        {isLoggedIn && (
          <>
            <div className="py-2 hover:bg-slate-950 hover:text-yellow-600 px-6">
              <div
                className="flex gap-4 content-center "
                onClick={() => setOpenDashBoardLinks(!openDashBoardLinks)}
              >
                Dashboard{" "}
                <FaCaretDown
                  className="content-center text-2xl"
                  style={
                    openDashBoardLinks
                      ? { rotate: "-180deg" }
                      : { rotate: "0deg" }
                  }
                />
              </div>
            </div>
            {openDashBoardLinks && (
              isAdmin ?(
<div className="grid justify-end text-start">
                  <NavLink to="dashboard/organization-details" className="py-1 px-6 hover:bg-gray-400">Organization Details</NavLink>
                  <NavLink to="dashboard/employee-registration" className="py-1 px-6 hover:bg-gray-400">+ New Employee</NavLink>
                  <NavLink to="dashboard/project-registration" className="py-1 px-6 hover:bg-gray-400">+ New Project</NavLink>
                  <NavLink to="dashboard/projects" className="py-1 px-6 hover:bg-gray-400">Projects</NavLink>
                  <NavLink to="dashboard/search" className="py-1 px-6 hover:bg-gray-400">Search</NavLink>
              </div>
              ):(
                <div className="grid justify-end text-start">
                  <NavLink to="dashboard/my-profile" className="py-1 px-6 hover:bg-gray-400">My Profile</NavLink>
                  <NavLink to="dashboard/my-tasks" className="py-1 px-6 hover:bg-gray-400">My Tasks</NavLink>
                  <NavLink to="dashboard/my-leaves" className="py-1 px-6 hover:bg-gray-400">Apply Leave</NavLink>
                  <NavLink to="dashboard/my-applications" className="py-1 px-6 hover:bg-gray-400">Track Application</NavLink>
              </div>
              )
              
            )}
          </>
        )}

        <div className="py-2 hover:bg-slate-950 hover:text-yellow-600 px-6 ">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="py-2 hover:bg-slate-950 hover:text-yellow-600 px-6">
          <NavLink to="/services">Services</NavLink>
        </div>
        <div className="py-2 hover:bg-slate-950 hover:text-yellow-600 px-6 ">
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="py-2 hover:bg-slate-950 hover:text-yellow-600 px-6">
          {isLoggedIn ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <NavLink to="/login">Sign In</NavLink>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
