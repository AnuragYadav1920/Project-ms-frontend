import React from 'react'

const UserSign = () => {
  return (
    <>
    <div className=" mx-auto  w-2/3 sign-in">
        <div className="grid gap-4 pb-4">
          <label htmlFor="employeeId" className="input-label">
            Employee ID :
          </label>
          <input type="text" placeholder="enter your Employee ID" className="input" />
        </div>
        <div className="grid gap-4 ">
          <label htmlFor="description" className="input-label">
            Date of Birth :
          </label>
          <input
            type="date"
            placeholder="enter your D O B"
            className="input "
          />
          
        </div>
        <div className=" my-8 pb-8 text-center">
          <button className="px-8 py-2 bg-white font-thin hover:bg-green-700">Submit</button>
        </div>
      </div>
    </>
  )
}

export default UserSign