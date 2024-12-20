import React from "react";

const ProjectCard = () => {
  return (
    <div className="min-h-48 bg-transparent content-center shadow-lg shadow-slate-950 cursor-pointer rounded-xl">
      <div className="text-2xl text-center font-light text-slate-400">
        HEALTH CARE
      </div>
      <div className="text-md text-center font-thin py-4 text-slate-500">App Development</div>
      <div className="flex flex-wrap justify-between text-sm font-thin text-center px-4">
        <div className="p-2 space-y-1">
          <div className="text-slate-400">Start</div>
          <div className="text-yellow-600">01/12/2024</div>
        </div>
        <div className="p-2 space-y-1">
          <div className="text-slate-400">End</div>
          <div className="text-yellow-600">01/06/2025</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
