import React from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark,FaCircleQuestion } from "react-icons/fa6";
const TrackApplication = () => {
  return (
    <>
      <div className="mt-8 py-4 px-2 rounded-lg min-h-96 backdrop-brightness-95">
        <div className="task-box ">
            <div className="py-4 bg-slate-500 text-center font-thin text-slate-400 rounded-lg ">
              <div className="space-y-2">
                <div className="text-lg text-slate-700 font-normal">Status</div>
                <div className="content-center inline-block text-4xl">
                  <FaCheckCircle  className="text-green-500"/>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className="content-center text-slate-700 font-normal">27/12/24</div>
                <button className="px-6 py-1 bg-slate-700 rounded-full">View</button>
              </div>
            </div>
            <div className="py-4 bg-slate-500 text-center font-thin text-slate-400 rounded-lg ">
              <div className="space-y-2">
                <div className="text-lg text-slate-700 font-normal">Status</div>
                <div className="content-center inline-block text-4xl">
                  <FaCircleQuestion  className="text-yellow-500"/>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className="content-center text-slate-700 font-normal">27/12/24</div>
                <button className="px-6 py-1 bg-slate-700 rounded-full">View</button>
              </div>
            </div>
            <div className="py-4 bg-slate-500 text-center font-thin text-slate-400 rounded-lg ">
              <div className="space-y-2">
                <div className="text-lg text-slate-700 font-normal">Status</div>
                <div className="content-center inline-block text-4xl">
                  <FaCircleXmark  className="text-red-800"/>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className="content-center text-slate-700 font-normal">27/12/24</div>
                <button className="px-6 py-1 bg-slate-700 rounded-full">View</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default TrackApplication;
