import React from 'react'
import { NavLink } from "react-router-dom";
const Hamburger = () => {
  return (
    <>
      <div className="w-60 h-80 bg-slate-500 font-thin text-md text-center py-4 px-6 content-center space-y-4">
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600 ">
          <NavLink to='/'>Home</NavLink>
        </div>
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600">
          <NavLink to='/about'>About</NavLink>
        </div>
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600">
          <NavLink to='/services'>Services</NavLink>
        </div>
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600">
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600">
          <NavLink to='/login'>Sign In</NavLink>
        </div>
      </div>
    </>
  )
}

export default Hamburger