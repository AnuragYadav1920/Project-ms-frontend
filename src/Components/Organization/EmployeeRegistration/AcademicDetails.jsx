import React from 'react'

const AcademicDetails = () => {
  return (
    <>
    <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700 ">
          <div className="employee-reg-form-main-div
          flex gap-2 justify-center  py-4 px-4">
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                University / College Name :{" "}
              </label>
              <input
                type="text"
                placeholder="University / College"
                className="input"
              />
            </div> 
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Duration :{" "}
              </label>
              <input
                type="text"
                placeholder="Duration"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Specialization :{" "}
              </label>
              <input
                type="text"
                placeholder="Specialization"
                className="input"
              />
            </div>           
          </div>
          <div className="text-center py-16 space-x-4 space-y-4">
            <button className="px-6 py-2 bg-gray-500 text-white">Cancel</button>
            <button className="px-6 py-2 bg-green-700 text-white">Add</button>
            <button className="px-6 py-2 bg-blue-400 text-white">Save</button>
          </div>
        </form>
      </div>
  </>
  )
}

export default AcademicDetails