import React from 'react'

const ProjectTimeline = () => {
  return (
    <>
    <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="">
              <label htmlFor="Name" className="input-label">
                Start Date :{" "}
              </label>
              <input
                type="date"
                placeholder="Start Date"
                className="input"
              />
            </div>
            <div className="">
              <label htmlFor="Name" className="input-label">
                End Date :{" "}
              </label>
              <input
                type="date"
                placeholder="End Date"
                className="input"
              />
            </div>
          </div>
          <div className="text-center m-6">
            <button className="min-w-24 py-2 text-white bg-blue-400">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProjectTimeline