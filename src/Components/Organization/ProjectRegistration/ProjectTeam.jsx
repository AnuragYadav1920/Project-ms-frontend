import React, { useState } from "react";

const ProjectTeam = () => {
  const [prManagerBox, setOpenPrManagerBox] = useState(false);
  const [prLeaderBox, setOpenPrLeaderBox] = useState(false);
  const [prMembersBox, setOpenPrMembersBox] = useState(false);

  const managers = ["Anurag", "Harsh", "Dhruva", "Yash", "Anurag", "Harsh", "Dhruva", "Yash", "Anurag", "Harsh", "Dhruva", "Yash", "Anurag", "Harsh", "Dhruva", "Yash"];
  const leaders = ["Arnav", "Ashutosh", "Promod", "Anuj", "Deepak"];
  const members = [
    "Deepika",
    "Kunal",
    "Ashish",
    "Dev",
    "Harshit",
    "Mayank",
    "Virat",
  ];

  const handleOpenBox = ()=>{
    if(prLeaderBox || prManagerBox || prMembersBox){
      setOpenPrLeaderBox(false)
      setOpenPrManagerBox(false)
      setOpenPrMembersBox(false)
    }
  }
  return (
    <>
      <div onClick={handleOpenBox}>
        <form
          action=""
          className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700 relative"
        >
          <div className="employee-reg-form-div space-y-2 w-1/3 mx-auto ">
            <div className="flex gap-2 justify-center project-team-select">
              <div className="content-center min-w-40">Project Manager :</div>
              <div className="py-2 px-6 bg-gray-500 inline-block text-white min-w-64 text-center cursor-pointer" onClick={()=>setOpenPrManagerBox(true)}>
                Select Project Manager
              </div>
            </div>
            {prManagerBox && (
              <div className="bg-slate-600 custom-box" onClick={handleOpenBox}>
                {managers.length > "0" &&
                  managers.map((option, index) => (
                    <label htmlFor="" className="block py-2 " key={index}>
                      <input
                        type="checkbox"
                        value={"Manager1"}
                        className="custom-checkbox"
                      />
                      {option}
                    </label>
                  ))}
              </div>
            )}
          </div>
          <div className="employee-reg-form-div space-y-2 w-1/3 my-8 mx-auto">
            <div className="flex gap-2 justify-center project-team-select">
              <div className="content-center min-w-40 ">Team Leader :</div>
              <div className="py-2 px-6 bg-gray-500 inline-block text-white min-w-64 text-center cursor-pointer" onClick={()=>setOpenPrLeaderBox(true)}>
                Select Team Leader
              </div>
            </div>
            {prLeaderBox && (
              <div className="bg-slate-600 custom-box" onClick={handleOpenBox}>
                {leaders.length > "0" &&
                  leaders.map((option, index) => (
                    <label htmlFor="" className="block py-2" key={index}>
                      <input
                        type="checkbox"
                        value={"Manager1"}
                        className="custom-checkbox"
                      />
                      {option}
                    </label>
                  ))}
              </div>
            )}
          </div>
          <div className="employee-reg-form-div space-y-2 w-1/3 mx-auto">
            <div className="flex gap-2 justify-center project-team-select">
              <div className="content-center min-w-40">Team Members :</div>
              <div className="py-2 px-6 bg-gray-500 inline-block text-white min-w-64 text-center cursor-pointer" onClick={()=>setOpenPrMembersBox(true)}>
                + Team Members
              </div>
            </div>
            {prMembersBox && (
              <div className="bg-slate-600 custom-box">
                {members.length > "0" &&
                  members.map((option, index) => (
                    <label htmlFor="" className="block py-2" key={index}>
                      <input
                        type="checkbox"
                        value={"Manager1"}
                        className="custom-checkbox"
                      />
                      {option}
                    </label>
                  ))}
              </div>
            )}
          </div>
          <div className="py-8 space-x-4 w-full text-center">
            <button className="px-6 py-2 bg-gray-500 text-white">Cancel</button>
            <button className="px-6 py-2 bg-blue-400 text-white">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProjectTeam;
