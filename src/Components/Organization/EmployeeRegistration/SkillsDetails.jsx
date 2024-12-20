import React from "react";

const SkillsDetails = () => {
  const progLanguages = [
    "Select",
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "Ruby",
    "Go",
    "Swift",
    "Rust",
    "Kotlin",
    "Other",
  ];
  const domain = [
    "Select",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "Web Development",
    "Application Development",
    "Database Management",
    "Cloud Computing",
    "Networking",
    "Game Development",
    "Robotics",
    "Embedded Systems",
    "Blockchain Development",
    "DevOps",
  ];
  const techstack = [
    "Select",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Angular",
    "Vue.js",
    "Svelite",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "Laravel",
    "Spring Boot",
    "Ruby on Rails",
  ];
  return (
    <>
      <div>
        <form action="" className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700">
          <div
            className="employee-reg-form-main-div
          grid gap-4 w-2/3 mx-auto"
          >
            <div className="employee-reg-form-div space-y-2 w-full ">
              <label htmlFor="Name" className="input-label">
                Programming Languages :{" "}
              </label>
              <select name="" id="" className="w-full px-4 py-2 outline-none">
                {progLanguages.map((option, index) => (
                  <option key={index} placeholder="Select" className="grid">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="employee-reg-form-div space-y-2 w-full ">
              <label htmlFor="Name" className="input-label">
                Domain :{" "}
              </label>
              <select name="" id="" className="w-full px-4 py-2 outline-none">
                {domain.map((option, index) => (
                  <option key={index} placeholder="Select" className="grid">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="employee-reg-form-div space-y-2 w-full">
              <label htmlFor="Name" className="input-label">
                Tech Stack :{" "}
              </label>
              <select name="" id="" className="w-full px-4 py-2 outline-none">
                {techstack.map((option, index) => (
                  <option key={index} placeholder="Select" className="grid">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center py-16 space-x-4">
            <button className="px-6 py-2 bg-gray-500 text-white">Cancel</button>
            <button className="px-6 py-2 bg-blue-400 text-white">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SkillsDetails;
