import React from 'react'
import {Components} from "../../../Imports/Components.js"
const FilteredProjects = () => {
  return (
    <>
      <div className='px-8 py-12 bg-slate-700 project-container'>
          <Components.ProjectCard/>
          <Components.ProjectCard/>
          <Components.ProjectCard/>
          <Components.ProjectCard/>
          <Components.ProjectCard/>
          <Components.ProjectCard/>
      </div>
    </>
  )
}

export default FilteredProjects