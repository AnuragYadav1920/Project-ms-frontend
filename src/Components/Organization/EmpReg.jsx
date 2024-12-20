import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
const EmpReg = () => {
  const [openLinks, setOpenLinks] = useState(false)

  const handleLinks = () =>{
    if(openLinks){
      setOpenLinks(false)
    }
  }
  return (
    <>
      <div className="mb-32" onClick={handleLinks}>
        <div className="registration-heading text-center text-5xl font-bold text-slate-400 py-8">
          Employee Registration
        </div>
        <div className="employee-registration-details-links flex flex-wrap gap-4 text-center text-nowrap text-slate-400 font-thin py-8 justify-center">
          <NavLink to="personal-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Personal Details</NavLink>
          <NavLink to="academic-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Academic Details</NavLink>
          <NavLink to="experience-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Experience Details</NavLink>
          <NavLink to="skills-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Skills Details</NavLink>
          <NavLink to="contact-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Contact Details</NavLink>
          <NavLink to="address-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Address Details</NavLink>
        </div>
        <div className="employee-reg-links-box bg-slate-700 text-white ">
          <div className="list-none px-4 py-2 rounded-full " onClick={()=>setOpenLinks(!openLinks)}>Open</div>
          <div className="grid employee-reg-links bg-gray-800 font-thin text-md py-4 px-4" style={openLinks?{visibility: 'visible'}:{display:'none', height:'auto'}}>
          <NavLink to="personal-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Personal Details</NavLink>
          <NavLink to="academic-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Academic Details</NavLink>
          <NavLink to="experience-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Experience Details</NavLink>
          <NavLink to="skills-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Skills Details</NavLink>
          <NavLink to="contact-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Contact Details</NavLink>
          <NavLink to="address-details" className="px-4 py-2 rounded-full min-w-36 hover:bg-white hover:text-yellow-600">Address Details</NavLink>
        </div>
        </div>
        <div className="py-8">
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default EmpReg;
