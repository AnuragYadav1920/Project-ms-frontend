import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="mb-32">
        <div className="registration-heading text-center text-5xl font-bold text-slate-400 py-8">
          Projects
        </div>
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
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Projects;
