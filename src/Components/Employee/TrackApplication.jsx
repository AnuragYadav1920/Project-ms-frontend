import React from "react";
import {NavLink} from "react-router-dom"

const TrackApplication = () => {
  return (
    <>
      <div className="mt-8 py-4 px-2 rounded-lg min-h-96 backdrop-brightness-95">
        <div className="task-box ">
          <NavLink to="/view-application">
          <div className="bg-slate-500 text-center font-thin text-slate-400 rounded-lg" >
            <button className="mx-auto px-6 py-2 rounded-full bg-white  my-14 ">
              View Application
            </button>
            <div className="text-start ">
              <span className="px-4">27/11/2024</span>
            </div>
          </div>
          </NavLink>
          <div className="bg-slate-500 text-center font-thin text-slate-400 rounded-lg">
            <button className="mx-auto px-6 py-2 rounded-full bg-white  my-14 ">
              View Application
            </button>
            <div className="text-start ">
              <span className="px-4">27/11/2024</span>
            </div>
          </div>
          <div className="bg-slate-500 text-center font-thin text-slate-400 rounded-lg">
            <button className="mx-auto px-6 py-2 rounded-full bg-white  my-14 ">
              View Application
            </button>
            <div className="text-start ">
              <span className="px-4">27/11/2024</span>
            </div>
          </div>
          <div className="bg-slate-500 text-center font-thin text-slate-400 rounded-lg">
            <button className="mx-auto px-6 py-2 rounded-full bg-white  my-14 ">
              View Application
            </button>
            <div className="text-start ">
              <span className="px-4">27/11/2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackApplication;
