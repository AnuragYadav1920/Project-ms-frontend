import React from 'react'

const AddressDetails = () => {
  return (
<>
      <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div className="employee-reg-form-main-div
          flex flex-wrap gap-4 justify-center ">
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Line 1 :{" "}
              </label>
              <input
                type="text"
                placeholder="Address Line 1"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Line 2 :{" "}
              </label>
              <input
                type="text"
                placeholder="Address Line 2"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                City :{" "}
              </label>
              <input
                type="text"
                placeholder="City"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Sate :{" "}
              </label>
              <input
                type="text"
                placeholder="State"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Pincode :{" "}
              </label>
              <input
                type="text"
                placeholder="Pincode"
                className="input"
              />
            </div>
            <div className="employee-reg-form-div space-y-2 w-1/3 ">
              <label htmlFor="Name" className="input-label">
                Country :{" "}
              </label>
              <input
                type="text"
                placeholder="Country"
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

export default AddressDetails