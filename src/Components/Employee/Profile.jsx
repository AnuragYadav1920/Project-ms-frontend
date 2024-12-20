import React from "react";

const Profile = () => {
  return (
    <>
      <div>
        <div className="backdrop-brightness-90 mt-4">
          <div className="py-8 text-3xl text-slate-400 text-center font-thin">
            My Profile
          </div>
          <div className="px-4">
            <div className="account-details-heading py-4 px-8 text-lg text-slate-400 font-thin">
              Personal Details :
            </div>
            <div className="account-personal-details text-nowrap">
              <ul className="p-8 backdrop-brightness-50 ">
                <img
                  src="../../images/photo.jpg"
                  alt=""
                  className=" w-40 h-40 mx-auto rounded-full"
                />
              </ul>
              <ul className="px-8 py-4 flex flex-wrap justify-between ">
                <li className="py-2 text-slate-400 text-md font-thin">
                  <span className="text-lg text-yellow-600  ">Name : </span>{" "}
                  Anurag Yadav
                </li>
                <li className="py-2 text-slate-400 text-md font-thin ">
                  <span className="text-lg text-yellow-600 ">
                    Date of Birth :{" "}
                  </span>{" "}
                  19 / 08 / 2000
                </li>
                <li className="py-2 text-slate-400 text-md font-thin">
                  <span className="text-lg text-yellow-600 ">
                    Father's Name :
                  </span>{" "}
                  Rakesh Kumar
                </li>
                <li className="py-2 text-slate-400 text-md font-thin">
                  <span className="text-lg text-yellow-600 ">
                    Mother's Name :
                  </span>{" "}
                  Neelam Devi
                </li>
                <li className="py-2 text-slate-400 text-md font-thin">
                  <span className="text-lg text-yellow-600">
                    Desingnation :
                  </span>{" "}
                  SDE 2
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-8 font-thin">
            <div className="account-details-heading py-4 px-8 text-lg text-slate-400">
              Skills Specialization :
            </div>
            <div className="py-4 text-slate-400 w-2/3 mx-auto">
              <div className="px-8 py-2 ">
                <span className="text-yellow-600 text-lg">
                  Technical skills : {" "}
                </span>
                C <span className="text-2xl text-yellow-600"> / </span>
                C++ <span className="text-2xl text-yellow-600"> / </span>
                HTML <span className="text-2xl text-yellow-600"> / </span>
                CSS <span className="text-2xl text-yellow-600"> / </span>
                Javascript <span className="text-2xl text-yellow-600"> / </span>
                Tailwind CSS <span className="text-2xl text-yellow-600"> / </span>
                ReactJS <span className="text-2xl text-yellow-600"> / </span>
                NodeJS <span className="text-2xl text-yellow-600"> / </span>
                Express <span className="text-2xl text-yellow-600"> / </span>
                MonogoDB <span className="text-2xl text-yellow-600"> / </span>
                SQL <span className="text-2xl text-yellow-600"> / </span>
                etc.
              </div>
              <div className="px-8 py-2 ">
                <span className="text-yellow-600 text-lg">Soft skills : </span>
                Leadership <span className="text-2xl text-yellow-600">/</span>
                Communication Skills
                <span className="text-2xl text-yellow-600"> / </span>
                etc.
              </div>
              <div></div>
            </div>
          </div>
          <div className="px-4 py-8">
            <div className="account-details-heading py-4 px-8 text-lg text-slate-400 font-thin">
              Experience Details :
            </div>
            <div className="py-4">
              <table className="account-details-table w-3/4 mx-auto">
                <thead>
                  <tr className="bg-slate-600 border-y-2 border-slate-400">
                    <th className="py-2 font-thin text-lg text-yellow-600 border-x-2 border-slate-400">
                      Organization
                    </th>
                    <th className="py-2 font-thin text-lg text-yellow-600 border-x-2 border-slate-400">
                      Duration
                    </th>
                    <th className="py-2 font-thin text-lg text-yellow-600 border-x-2 border-slate-400">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-950 border-2 border-slate-600">
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      Amazon Pvt Ltd.
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 border-x-2 border-slate-600">
                      3 years
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400">
                      Junior Developer
                    </td>
                  </tr>
                  <tr className="bg-slate-950 border-2 border-slate-600">
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      Google Pvt Ltd.
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 border-x-2 border-slate-600">
                      6 months
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      Junior Developer
                    </td>
                  </tr>
                  <tr className="bg-slate-950 border-2 border-slate-600">
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      Google Pvt Ltd.
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 border-x-2 border-slate-600">
                      6 months
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      Junior Developer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="px-4 py-8">
            <div className="account-details-heading py-4 px-8 text-lg text-slate-400 font-thin">
              Academic Details :
            </div>
            <div className="py-4">
              <table className="account-details-table w-3/4 mx-auto">
                <thead>
                  <tr className="bg-slate-600 border-y-2 border-slate-400">
                    <th className="py-2 font-thin text-lg text-yellow-600 border-x-2 border-slate-400">
                      University/ College Name
                    </th>
                    <th className="py-2 font-thin text-lg text-yellow-600 border-x-2 border-slate-400">
                      Duration
                    </th>
                    <th className="py-2 font-thin text-lg text-yellow-600 border-x-2 border-slate-400">
                      Specialization
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-950 border-2 border-slate-600">
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      FGIET, Raebareli
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 border-x-2 border-slate-600">
                      2020-24
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400">
                      Computer Science Engineering
                    </td>
                  </tr>
                  <tr className="bg-slate-950 border-2 border-slate-600">
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      SJS PUBLIC SCHOOL, Unchahar
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 border-x-2 border-slate-600">
                      2017-18
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      Intermidiate
                    </td>
                  </tr>
                  <tr className="bg-slate-950 border-2 border-slate-600">
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      SJS PUBLIC SCHOOL, Unchahar
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 border-x-2 border-slate-600">
                      2015-16
                    </td>
                    <td className="py-1 font-thin text-md text-center text-gray-400 ">
                      High School
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="px-4 py-8">
            <div className="account-details-heading py-4 px-8 text-lg text-slate-400 font-thin">
              Contact Details :
            </div>
            <div className="font-thin">
              <ul className=" account-contact-details px-8 py-4 flex justify-center gap-12 ">
                <li className="py-2 text-slate-400 text-md ">
                  <span className="text-lg text-yellow-600 ">Email :</span>{" "}
                  anurag192000@gmail.com
                </li>
                <li className="py-2 text-slate-400 text-md ">
                  <span className="text-lg text-yellow-600 ">Mobile No :</span>{" "}
                  6387208361
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-8 mb-10">
            <div className="account-details-heading py-4 px-8 text-lg text-slate-400 font-thin">
              Address Details :
            </div>
            <div className="account-personal-details flex justify-center gap-8 text-nowrap">
              <ul className="px-8 py-4 ">
                <li className="py-2 text-slate-400 text-md font-thin">
                  <span className="text-lg text-yellow-600  ">Location : </span>{" "}
                  HN-136, Chheechhemau
                </li>
                <li className="py-2 text-slate-400 text-md font-thin">
                  <span className="text-lg text-yellow-600  "> Pincode : </span>
                  229204
                </li>
                <li className="py-2 text-slate-400 text-md font-thin">
                  <span className="text-lg text-yellow-600  "> Country : </span>
                  India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
