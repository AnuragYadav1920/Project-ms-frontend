import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbMapPinCode } from "react-icons/tb";
import { IoMdGlobe } from "react-icons/io";

const Profile = () => {
  const skills = [
    "C++",
    "Python",
    "DSA",
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "SQL",
  ];
  return (
    <>
      <div className="employee-profile flex justify-between my-16">
        {/* left section */}
        <div className="left-section bg-slate-400 min-h-96 py-8 px-8">
          <div className="my-4">
            <div className="text-2xl font-semibold px-4 py-2">
              Personal Details :
            </div>
            <div className="flex flex-wrap-reverse justify-between py-6 px-4">
              <div className="personal-details-basic text-nowrap">
                <div className="flex gap-4 px-4 py-2">
                  <div className="font-normal text-lg">Name : </div>
                  <div className="font-thin text-md">Anurag Yadav</div>
                </div>
                <div className="flex gap-4 px-4 py-2">
                  <div className="font-normal text-lg">Father's Name : </div>
                  <div className="font-thin text-md">Rakesh Kumar</div>
                </div>
                <div className="flex gap-4 px-4 py-2">
                  <div className="font-normal text-lg">Mother's Name : </div>
                  <div className="font-thin text-md">Neelam Devi</div>
                </div>
                <div className="flex gap-4 px-4 py-2">
                  <div className="font-normal text-lg">D O B : </div>
                  <div className="font-thin text-md"> 19 / 08 / 2000</div>
                </div>
                <div className="flex gap-4 px-4 py-2">
                  <div className="font-normal text-lg">Designation : </div>
                  <div className="font-thin text-md"> Software Developer</div>
                </div>
              </div>
              <div className="personal-details-image shrink-0 ">
                <div className="shrink-0 p-4">
                  <img
                    src="../images/photo.jpg"
                    alt=""
                    className="w-40 h-44 shrink-0 mx-auto border-8 border-slate-700"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 ">
            <div className="text-2xl font-semibold px-4 py-2">
              Academic Details :
            </div>
            <div className="px-4">
              <div className="flex justify-between px-4 py-2">
                <div className="">
                  <div className="text-lg font-normal">
                    Feroze Gandhi Institute Of Engineering And Technology,
                    Raebareli
                  </div>
                  <div className="font-thin text-md">
                    Computer Science And Engineering
                  </div>
                  <div className="flex gap-2 font-thin text-sm">
                    <div>Graduation :</div>
                    <div>7.74 / 10</div>
                  </div>
                </div>
                <div>2024</div>
              </div>
              <div className="flex justify-between px-4 py-2">
                <div className="">
                  <div className="text-lg font-normal">
                    S J S Public School Unchahar, Raebareli
                  </div>
                  <div className="font-thin text-md">Science</div>
                  <div className="flex gap-2 font-thin text-sm">
                    <div>Intermediate : </div>
                    <div>80.8 %</div>
                  </div>
                </div>
                <div>2018</div>
              </div>
              <div className="flex justify-between px-4 py-2">
                <div className="">
                  <div className="text-lg font-normal">
                    S J S Public School Unchahar, Raebareli
                  </div>
                  <div className="font-thin text-md">Science</div>
                  <div className="flex gap-2 font-thin text-sm">
                    <div>High School : </div>
                    <div>10 / 10</div>
                  </div>
                </div>
                <div>2016</div>
              </div>
            </div>
          </div>
          <div className="my-4 ">
            <div className="text-2xl font-semibold px-4 py-2">
              Experience Details :
            </div>
            <div className="px-4">
              <div className="flex justify-between px-4 py-2">
                <div className="">
                  <div className="text-lg font-normal">
                    Feroze Gandhi Institute Of Engineering And Technology,
                    Raebareli
                  </div>
                  <div className="font-thin text-md">
                    Computer Science And Engineering
                  </div>
                  <div className="flex gap-2 font-thin text-sm">
                    <div>Graduation :</div>
                    <div>7.74 / 10</div>
                  </div>
                </div>
                <div>2024</div>
              </div>
              <div className="flex justify-between px-4 py-2">
                <div className="">
                  <div className="text-lg font-normal">
                    S J S Public School Unchahar, Raebareli
                  </div>
                  <div className="font-thin text-md">Science</div>
                  <div className="flex gap-2 font-thin text-sm">
                    <div>Intermediate : </div>
                    <div>80.8 %</div>
                  </div>
                </div>
                <div>2018</div>
              </div>
              <div className="flex justify-between px-4 py-2">
                <div className="">
                  <div className="text-lg font-normal">
                    S J S Public School Unchahar, Raebareli
                  </div>
                  <div className="font-thin text-md">Science</div>
                  <div className="flex gap-2 font-thin text-sm">
                    <div>High School : </div>
                    <div>10 / 10</div>
                  </div>
                </div>
                <div>2016</div>
              </div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="right-section bg-slate-600 min-h-96 py-8 px-8">
          <div className="my-4">
            <div className="text-2xl font-semibold px-4 py-2">Skills:</div>
            <div className="px-4 flex justify-start py-2">
              <div className="flex flex-wrap gap-2 px-4 py-2">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-box text-md font-thin py-1 px-6 bg-slate-700 rounded-full">{skill}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="text-2xl font-semibold px-4 py-2">
              Contact Details :
            </div>
            <div className="px-4 flex gap-2 justify-start flex-wrap py-2">
              <div className="flex gap-2 px-4">
                <div className="text-xl content-center">
                  <IoMdMail />
                </div>
                <div className="text-md font-thin content-center">
                  anurag@gmail.com
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <div className="text-xl content-center">
                  <FaPhoneSquareAlt />
                </div>
                <div className="text-md font-thin content-center">
                  6387208361
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="text-2xl font-semibold px-4 py-2">
              Address Details :
            </div>
            <div className="px-4 flex flex-wrap gap-2 justify-start py-2">
              <div className="flex gap-2 px-4 ">
                <div className="text-xl content-center">
                  <FaLocationDot />
                </div>
                <div className="text-md font-thin content-center">
                  Raebareli
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <div className="text-xl content-center">
                  <TbMapPinCode />
                </div>
                <div className="text-md font-thin content-center">229204</div>
              </div>
              <div className="flex gap-2 px-4">
                <div className="text-xl content-center">
                  <IoMdGlobe />
                </div>
                <div className="text-md font-thin content-center">India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
