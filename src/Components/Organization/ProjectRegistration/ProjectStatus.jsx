import React from "react";

const ProjectStatus = () => {
  return (
    <>
      <div>
        <form
          action=""
          className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div className="input-details-single mx-auto w-1/3">
          <label htmlFor="Name" className="input-label">
            Status :{" "}
          </label>
            <select name="" id="" className="w-full py-2 outline-none">
              <option value="">Select</option>
              <option value="">Planning</option>
              <option value="">Active</option>
              <option value="">Completed</option>
            </select>
          </div>
          <div className="text-center m-6">
            <button className="min-w-24 py-2 text-white bg-blue-400">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProjectStatus;
