import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import OrgSign from "../../Components/SignIn/OrgSign.jsx";
import UserSign from "../../Components/SignIn/UserSign.jsx";

const Login = () => {
  const [loginType, setLoginType] = useState(false);
  const [choosenType, setChoonseType] = useState(null)

  const handleChooseType = (value)=>{
    setChoonseType(value)
    setLoginType(false)
  }

  useEffect(()=>{
  },[choosenType])

  return (
    <>
      <div className="container ">
        <div className="font-thin text-md text-gray-400 py-8">Sign In /</div>
        <div className="login-detail-box">
          <div className="font-extrabold w-1/2 py-8 mx-auto text-4xl text-center text-white">
            Welcome to the OSM
          </div>
          <div className="font-thin text-md text-center px-4 ">
            We are happy to see you here hopefully you will like our
            services.Login to our website for better experience.
          </div>
          <div className="w-2/3 mx-auto mt-8 bg-white">
            <div
              className="flex justify-between bg-white  px-4 py-1 shadow-xl "
              onClick={() => setLoginType(!loginType)}
            >
              <div className="font-thin text-md content-center px-8 text-gray-900">{choosenType!=null?`${choosenType}`:'Select Type'}</div>
              <div>
                <RiArrowDropDownLine className="text-3xl" style={loginType?{rotate:'0deg'}:{rotate:'-90deg'}} />
              </div>
            </div>
            {loginType && (
              <div className=" pb-8 pt-4 px-8 text-gray-600">
                <div className="px-4 py-2 hover:bg-gray-900 hover:text-white" onClick={()=>handleChooseType('User')}>User</div>
                <div className="px-4 py-2 hover:bg-gray-900 hover:text-white" onClick={()=>handleChooseType('Organization')}>Organization</div>
              </div>
            )}
          </div>
          {
            choosenType!=null && choosenType==='User'?<div className="mt-8"><UserSign/></div>:<div className="mt-8"><OrgSign/></div>
          }
        </div>
      </div>
      <div className="w-full mt-16">
        <div className="grid items-center z-10 relative">
          <span className="text-center p-4 bg-gray-600 mx-auto rounded-full font-semibold text-slate-200">
            OR
          </span>
          <div className="h-0.5 bg-gray-600 w-full mx-auto -z-10 absolute"></div>
        </div>
      </div>
      <div className="container  pt-8 pb-16 ">
        <div className=" text-center text-gray-400 py-2"><span className="text-red-700 text-lg">Note : </span> Only User can use the Google and Meta sign in methods.</div>
        <div className="text-center">
          <button className=" sign-in px-4 py-2 my-4 w-2/3  rounded-lg bg-gray-600 text-yellow-600">
            Sign In with Google
          </button>
        </div>
        <div className="text-center">
          <button className=" sign-in px-4 py-2 mb-12 w-2/3 rounded-lg bg-gray-600 text-yellow-600">
            Sign In with Meta
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
