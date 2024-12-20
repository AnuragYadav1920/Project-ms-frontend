import React from "react";
import { NavLink } from "react-router-dom";
const SideDashboard = () => {
  return (
    <>
      <div className="w-60 h-72 bg-slate-500 font-thin text-md text-center py-4 px-6 content-center space-y-4">
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600 ">
          <NavLink to='my-profile'>My Profile</NavLink>
        </div>
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600">
          <NavLink to='my-tasks'>Tasks</NavLink>
        </div>
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600">
          <NavLink to='my-leaves'>Apply Leave</NavLink>
        </div>
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600">
          <NavLink to='my-applications'>Track Application</NavLink>
        </div>
      </div>
    </>
  );
};

export default SideDashboard ;
