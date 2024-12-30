import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

const SkillsDetails = () => {
  const [openViewSkillsBox, setOpenViewSkillsBox] = useState(false);
  const [allSkills, setAllSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const handleAddSkills = () => {
    const skillTrimmed = skill.trim().toLowerCase(); 
    if (skillTrimmed) {
      if (!allSkills.some(existingSkill => existingSkill.toLowerCase() === skillTrimmed)) {
        setAllSkills((prevSkills) => [...prevSkills, skill.trim()]);
        alert("skill added successfully")
      }else{
        alert("skill already added")
      }
      setSkill(""); 
  };
 }
  const handleRemoveSkills = (skill) => {
    const remainingSkills = allSkills.filter((item) => item !== skill);
    setAllSkills(remainingSkills)
  };

  const handleSubmit = () => {
    console.log(allSkills);
  };
  useEffect(() => {
  }, [allSkills]);
  return (
    <>
      <div>
        <div className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700 ">
          <div>
            <div className="">
              <div className="employee-reg-form-div w-2/3 mx-auto">
                <label htmlFor="skills" className="input-label">
                  Skills:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Skills"
                  className="input"
                  id="skill"
                  required
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center py-4 flex gap-4 flex-wrap-reverse justify-center">
              <div
                className="min-w-24 py-2 bg-gray-500 text-white cursor-pointer"
                onClick={() => setOpenViewSkillsBox(!openViewSkillsBox)}
              >
                {openViewSkillsBox ? "Hide" : "View"}
              </div>
              <div
                className="min-w-24 py-2 bg-green-700 text-white cursor-pointer"
                onClick={handleAddSkills}
              >
                Add
              </div>
              <div
                className="min-w-24 py-2 bg-blue-400 text-white cursor-pointer"
                onClick={handleSubmit}
              >
                Save
              </div>
            </div>
          </div>
        </div>
        <div>
          {openViewSkillsBox && (
            <div className="flex flex-wrap gap-2 bg-white py-8 px-4 justify-start text-slate-300">
              {allSkills.map((skill, index) => (
                <div
                  className="flex gap-4 justify-center min-h-8 px-4  bg-slate-700 rounded-full "
                  key={index}
                >
                  <div className="content-center">{skill}</div>
                  <div className="content-center text-lg cursor-pointer">
                    <IoIosClose
                      className="hover:bg-slate-500 hover:text-white rounded-full"
                      onClick={() => handleRemoveSkills(skill)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
};

export default SkillsDetails
