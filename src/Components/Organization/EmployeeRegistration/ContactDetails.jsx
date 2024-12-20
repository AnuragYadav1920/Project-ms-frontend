import React from 'react'

const ContactDetails = () => {
  return (
<>
      <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div className="employee-reg-form-main-div
          flex flex-wrap gap-4 justify-center ">
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Email :{" "}
              </label>
              <input
                type="text"
                placeholder="enter the email"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Phone No :{" "}
              </label>
              <input
                type="text"
                placeholder="enter the phone no"
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

export default ContactDetails