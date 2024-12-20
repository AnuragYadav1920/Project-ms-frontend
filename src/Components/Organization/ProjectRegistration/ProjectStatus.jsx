import React from 'react'

const ProjectStatus = () => {
  return (
    <>
    <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
            <div className="employee-reg-form-div grid space-y-2 w-2/3 mx-auto ">
              <label htmlFor="Name" className="input-label">
                Status :{" "}
              </label>
              <select name="" id="" className='w-full py-2 outline-none'>
                <option value="">
                  Select
                </option>
                <option value="">
                  Planning
                </option>
                <option value="">
                  Active
                </option>
                <option value="">
                  Completed
                </option>
              </select>
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

export default ProjectStatus