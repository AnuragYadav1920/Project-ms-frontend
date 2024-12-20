import React from 'react'

const ProjectDetails = () => {
  return (
    <>
    <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div className="employee-reg-form-main-div
          flex flex-wrap gap-4 justify-center ">
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Name / Title :{" "}
              </label>
              <input
                type="text"
                placeholder="Name / Title"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Project Id :{" "}
              </label>
              <input
                type="text"
                placeholder="Unique Id"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Category :{" "}
              </label>
              <input
                type="text"
                placeholder="Category"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Owner :{" "}
              </label>
              <input
                type="text"
                placeholder="Owner"
                className="input"
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
  )
}

export default ProjectDetails