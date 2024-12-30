import React, { useEffect, useState } from "react";

const AcademicDetails = () => {
  const [openViewDetailsBox, setOpenViewDetailsBox] = useState(false);
  const [allAcademicDetails, setAllAcademicDetails] = useState([]);
  const [academicDetails, setAcademicDetails] = useState({
    institute: "",
    year: "",
    grades: "",
    type: "",
    specialization: "",
  });

  const handleAllAcademicDetails = () => {
    const { institute, year, grades, type, specialization } = academicDetails;

    if (institute && year && grades && type && specialization) {
      setAllAcademicDetails((prevDetails) => [...prevDetails, academicDetails]);
      alert("details added successfully");
    } else {
      alert("Input details are missing");
      return;
    }

    setAcademicDetails({
      institute: "",
      year: "",
      grades: "",
      type: "",
      specialization: "",
    });
  };

  const handleRemoveAcademic = (item) => {
    const updatedAcademic = allAcademicDetails.filter(
      (academic) => academic !== item
    );
    setAllAcademicDetails(updatedAcademic);
    alert("details removed successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allAcademicDetails);
  };

  useEffect(() => {
    console.log("All academic details updated:", allAcademicDetails);
  }, [allAcademicDetails]);

  return (
    <>
      <div>
        <div className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700 ">
          <div>
            <div
              className="employee-reg-form-main-div
            flex gap-2 justify-center  py-12 rounded-xl px-4 border-4 border-gray-400"
            >
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="institute" className="input-label">
                  University / College:{" "}
                </label>
                <input
                  type="text"
                  placeholder="University / College"
                  className="input"
                  id="institute"
                  required
                  value={academicDetails.institute}
                  onChange={(e) =>
                    setAcademicDetails({
                      ...academicDetails,
                      institute: e.target.value,
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
                  className="input"
                  id="year"
                  required
                  value={academicDetails.year}
                  onChange={(e) =>
                    setAcademicDetails({
                      ...academicDetails,
                      year: e.target.value,
                    })
                  }
                />
              </div>
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="grades" className="input-label">
                  Grades :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Grades"
                  className="input"
                  id="grades"
                  required
                  value={academicDetails.grades}
                  onChange={(e) =>
                    setAcademicDetails({
                      ...academicDetails,
                      grades: e.target.value,
                    })
                  }
                />
              </div>
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="type" className="input-label">
                  Type :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Graduate etc.."
                  className="input"
                  id="type"
                  required
                  value={academicDetails.type}
                  onChange={(e) =>
                    setAcademicDetails({
                      ...academicDetails,
                      type: e.target.value,
                    })
                  }
                />
              </div>
              <div className="employee-reg-form-div space-y-2 w-1/3 ">
                <label htmlFor="specialization" className="input-label">
                  Specialization :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Specialization"
                  id="specialization"
                  className="input"
                  required
                  value={academicDetails.specialization}
                  onChange={(e) =>
                    setAcademicDetails({
                      ...academicDetails,
                      specialization: e.target.value,
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
                onClick={handleAllAcademicDetails}
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
              Academic details should be added in order of Higher Studies to
              Lower Studies.
            </div>
          </div>
        </div>
        <div>
          {openViewDetailsBox && (
            <div className="view-academic-details min-h-52  bg-white">
              {allAcademicDetails?.map((item, index) => (
                  <div
                    className="border-2 border-slate-400 w-auto  p-4"
                    key={index}
                  >
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        University/College :
                      </div>
                      <div className="text-md font-thin">{item.institute}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Year :{" "}
                      </div>
                      <div className="text-md font-thin">{item.year}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Grades :
                      </div>
                      <div className="text-md font-thin">{item.grades}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Type :
                      </div>
                      <div className="text-md font-thin">{item.type}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-lg font-normal text-slate-700">
                        Specialization :{" "}
                      </div>
                      <div className="text-md font-thin">
                        {item.specialization}
                      </div>
                    </div>
                    <div className=" text-right py-4">
                    <button
                      className="px-4 py-1 bg-red-700 rounded-full text-white"
                      onClick={() => handleRemoveAcademic(item)}
                    >
                      remove
                    </button>
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

export default AcademicDetails;
