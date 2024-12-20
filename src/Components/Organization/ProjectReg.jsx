import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
const ProjectReg = () => {
  return (
    <>
      <div className="mb-32">
        <div className="registration-heading text-center text-5xl font-bold text-slate-400 py-8">
          Project Registration
        </div>
        <div className="employee-registration-details-links flex flex-wrap gap-4 text-center text-nowrap text-slate-400 font-thin py-8 justify-center">
          <NavLink to="details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Details</NavLink>
          <NavLink to="description" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Description</NavLink>
          <NavLink to="timeline" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Timeline</NavLink>
          <NavLink to="team-information" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Team</NavLink>
          <NavLink to="resources" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Resources</NavLink>
          <NavLink to="status" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Status</NavLink>
        </div>
        <div className="py-8">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default ProjectReg