import React from "react";

const Personaldetails = () => {
  return (
    <>
      <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div className="employee-reg-form-main-div
          flex flex-wrap gap-4 justify-center ">
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Name :{" "}
              </label>
              <input
                type="text"
                placeholder="enter the name"
                className="input"
                required
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Date of Birth :{" "}
              </label>
              <input type="date" className="input" required/>
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Father's Name :{" "}
              </label>
              <input
                type="text"
                placeholder="enter father's name"
                className="input"
                required
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Mother's Name :{" "}
              </label>
              <input
                type="text"
                placeholder="enter mother's name"
                className="input"
                required
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Photo:{" "}
              </label>
              <input
                type="file"
                placeholder="enter the name"
                className="input bg-white"
                required
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Designation :{" "}
              </label>
              <input
                type="text"
                placeholder="enter designation"
                className="input"
                required
              />
            </div>
          </div>
          <div className="text-center py-16 space-x-4">
            <button className="px-6 py-2 bg-gray-500 text-white">Cancel</button>
            <button className="px-6 py-2 bg-blue-400 text-white">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Personaldetails;
