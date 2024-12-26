import React from "react";

const OrgSign = () => {
  return (
    <>
      <div className="login-box mx-auto  w-2/3 sign-in">
        <div className="grid gap-4 pb-4">
          <label htmlFor="email" className="input-label">
            Email :
          </label>
          <input type="text" placeholder="enter your email" className="input" />
        </div>
        <div className="grid gap-4 ">
          <label htmlFor="description" className="input-label">
            Password :
          </label>
          <input
            type="text"
            placeholder="enter your password"
            className="input"
          />
        </div>
        <div className=" my-8 pb-8 text-center">
          <button className="px-8 py-2 bg-white font-thin hover:bg-green-700">Submit</button>
        </div>
      </div>
    </>
  );
};

export default OrgSign;
