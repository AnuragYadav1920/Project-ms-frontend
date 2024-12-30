import React from "react";
import { FaFileDownload } from "react-icons/fa";
const Tasks = () => {
  return (
    <>
      <div className="min-h-96 backdrop-brightness-90 mt-8 py-4 px-2">
        <div className="task-box ">
          <div className="bg-slate-500 text-slate-400 rounded-lg min-h-44 content-center">
            <div className="grid justify-center py-2">
              <div className="p-4 inline-block backdrop-brightness-95 rounded-full hover:bg-slate-700  cursor-pointer">
              <FaFileDownload className="text-3xl" />
              </div>
            </div>
            <div className="flex justify-between px-4 py-4">
              <div className="content-center text-slate-700 font-normal">
                27/12/24
              </div>
              <button className="px-6 py-1 bg-slate-700 rounded-full font-thin">
                View
              </button>
            </div>
          </div>
          <div className="bg-slate-500 text-slate-400 rounded-lg min-h-44 content-center">
            <div className="grid justify-center py-2">
              <div className="p-4 inline-block backdrop-brightness-95 rounded-full hover:bg-slate-700  cursor-pointer">
              <FaFileDownload className="text-3xl" />
              </div>
            </div>
            <div className="flex justify-between px-4 py-4">
              <div className="content-center text-slate-700 font-normal">
                27/12/24
              </div>
              <button className="px-6 py-1 bg-slate-700 rounded-full">
                View
              </button>
            </div>
          </div>
          <div className="bg-slate-500 text-slate-400 rounded-lg min-h-44 content-center">
            <div className="grid justify-center py-2">
              <div className="p-4 inline-block backdrop-brightness-95 rounded-full hover:bg-slate-700  cursor-pointer">
              <FaFileDownload className="text-3xl" />
              </div>
            </div>
            <div className="flex justify-between px-4 py-4">
              <div className="content-center text-slate-700 font-normal">
                27/12/24
              </div>
              <button className="px-6 py-1 bg-slate-700 rounded-full">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
