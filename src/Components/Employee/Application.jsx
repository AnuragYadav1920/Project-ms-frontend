import React from "react";

const Application = () => {
  return (
    <>
      <div className="py-8 text-md font-thin">
        <div className="bg-slate-700 py-8 min-h-96">
          <div className="application-project-upload">
            <label htmlFor="" className="">
              <input
                type="file"
                className="py-4 px-8 border-2 border-slate-400 w-full rounded-full text-lg text-slate-400"
              />
            </label>
          </div>
          <div className="text-center m-6">
            <button className="px-8 py-2 text-slate-700 bg-slate-400">
              Apply
            </button>
          </div>
          <div>
            <p className="text-center py-1 text-slate-400">
              <span className="text-red-600">Note :</span> File should be in
              PDF only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
