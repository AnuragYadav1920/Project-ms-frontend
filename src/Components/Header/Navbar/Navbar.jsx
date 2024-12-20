import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import Hamburger from '../../Dashboard/Hamburger.jsx'
const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false)
   const handleOpenHamburger = ()=>{
    if(openHamburger){
      setOpenHamburger(false)
    }
   }
  return (
    <>
      <nav className="container flex justify-between bg-transparent py-8 text-nowrap " onClick={handleOpenHamburger}>
        <div className="">
          <span className="text-3xl font-bold text-yellow-600">OMS</span>
        </div>
        <div className="right-nav-links flex gap-8  text-md font-thin ">
          <div className="flex gap-8  ">
            <NavLink
              to="/"
              className="py-1 px-3 text-yellow-600 content-center"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full content-center ${
                  isActive ? "text-yellow-600 bg-slate-50" : "text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full content-center ${
                  isActive ? "text-yellow-600 bg-slate-50" : "text-white"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full content-center ${
                  isActive ? "text-yellow-600 bg-slate-50" : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex gap-8 ">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full content-center ${
                  isActive ? "text-yellow-600 bg-slate-50" : "text-white"
                }`
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full content-center ${
                  isActive ? "text-yellow-600 bg-slate-50" : "text-white"
                }`
              }
            >
              Account
            </NavLink>
          </div>
        </div>
        <div className="right-nav-hamberger hamberger-icon"> 
        <GiHamburgerMenu className="text-3xl font-bold text-yellow-600 " onClick={()=>setOpenHamburger(!openHamburger)}/>
        </div>
        {
          openHamburger&&(
            <div className="absolute top-14 right-2 z-20">
                <Hamburger/>
            </div>
          )
        }
      </nav>
    </>
  );
};

export default Navbar;
