import React, { useState, useEffect } from "react";

const ExperienceDetails = () => {
  const [openViewDetailsBox, setOpenViewDetailsBox] = useState(false);
  const [allExperienceDetails, setAllExperienceDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState({
    organization: "",
    year: "",
    duration: "",
    role: "",
  });

  const handleAllExperienceDetails = () => {
    const { organization, year, duration, role } = experienceDetails;

    if (organization && year && duration && role) {
      setAllExperienceDetails((prevDetails) => [
        ...prevDetails,
        experienceDetails,
      ]);
      alert("details added successfully");
    } else {
      alert("Input details are missing");
      return;
    }

    setExperienceDetails({
      organization: "",
      year: "",
      duration: "",
      role: "",
    });
  };

  const handleRemoveExperience = (item)=>{
    const updatedExperience = allExperienceDetails.filter((experience)=>experience!==item)
    setAllExperienceDetails(updatedExperience)
    alert("details removed successfully")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allExperienceDetails);
  };

  useEffect(() => {
    console.log("All experience details updated:", allExperienceDetails);
  }, [allExperienceDetails]);
  return (
    <>
      <div>
        <div className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700 ">
          <div>
            <div
              className="employee-reg-form-main-div
          flex gap-2 justify-center  py-12 px-4 border-4 border-slate-400 rounded-xl"
            >
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="Organization" className="input-label">
                  Organization :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Organization"
                  id="organization"
                  className="input"
                  required
                  value={experienceDetails.organization}
                  onChange={(e) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      organization: e.target.value,
                    })
                  }
                />
              </div>
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="year" className="input-label">
                  Year :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Year"
                  id="year"
                  className="input"
                  required
                  value={experienceDetails.year}
                  onChange={(e) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      year: e.target.value,
                    })
                  }
                />
              </div>
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="duration" className="input-label">
                  Duration :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Duration"
                  id="duration"
                  className="input"
                  required
                  value={experienceDetails.duration}
                  onChange={(e) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      duration: e.target.value,
                    })
                  }
                />
              </div>
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="role" className="input-label">
                  Role :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Role"
                  className="input"
                  id="role"
                  required
                  value={experienceDetails.role}
                  onChange={(e) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      role: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="text-center py-16 flex gap-4 flex-wrap-reverse justify-center">
              <div
                className="min-w-24 py-2 bg-gray-500 text-white cursor-pointer"
                onClick={() => setOpenViewDetailsBox(!openViewDetailsBox)}
              >
                {openViewDetailsBox ? "Hide" : "View"}
              </div>
              <div
                className="min-w-24 py-2 bg-green-700 text-white cursor-pointer"
                onClick={handleAllExperienceDetails}
              >
                Add
              </div>
              <div
                className="min-w-24 py-2 bg-blue-400 text-white"
                onClick={handleSubmit}
              >
                Save
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="text-red-700 text-lg ">Note : </div>
            <div>
              Experience details should be added in order of recent to
              older one.
            </div>
          </div>
        </div>
        <div>
          {openViewDetailsBox && (
            <div className="view-academic-details min-h-46  bg-white">
              {allExperienceDetails?.map((item, index) => (
                <div
                  className="border-2 border-slate-400 min-h-52 w-auto  p-4 "
                  key={index}
                >
                  <div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Organization:
                      </div>
                      <div className="text-md font-thin">
                        {item.organization}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Year :{" "}
                      </div>
                      <div className="text-md font-thin">{item.year}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Duration :
                      </div>
                      <div className="text-md font-thin">{item.duration}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Role :
                      </div>
                      <div className="text-md font-thin">{item.role}</div>
                    </div>
                  </div>
                  <div className=" text-right py-4">
                    <button className="px-4 py-1 bg-red-700 rounded-full text-white" onClick={()=>handleRemoveExperience(item)}>remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExperienceDetails;
