import React from 'react'

const ProjectDetails = () => {
  return (
    <>
    <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div className="project-details">
            <div className="">
              <label htmlFor="name" className="input-label">
                Name / Title :{" "}
              </label>
              <input
                type="text"
                placeholder="Name / Title"
                className="input"
              />
            </div>
            <div className="">
              <label htmlFor="category" className="input-label">
                Category :{" "}
              </label>
              <input
                type="text"
                placeholder="Category"
                className="input"
              />
            </div>
            <div className="">
              <label htmlFor="owner" className="input-label">
                Owner :{" "}
              </label>
              <input
                type="text"
                placeholder="Owner"
                className="input"
              />
            </div>
            <div className="">
              <label htmlFor="budget" className="input-label">
                Budget :{" "}
              </label>
              <input
                type="text"
                placeholder="Budget in $"
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

export default ProjectDetails