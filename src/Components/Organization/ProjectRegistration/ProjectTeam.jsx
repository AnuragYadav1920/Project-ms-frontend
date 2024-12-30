import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const ProjectTeam = () => {
  const [prManagerBox, setOpenPrManagerBox] = useState(false);
  const [prLeaderBox, setOpenPrLeaderBox] = useState(false);
  const [prMembersBox, setOpenPrMembersBox] = useState(false);
  const [openViewSelected, setOpenViewSelected] = useState(false);

  const [team, setTeam] = useState({
    teamManager: "",
    teamLeader: "",
    teamMembers: [],
  });

  const managerBoxRef = useRef(null);
  const leaderBoxRef = useRef(null);
  const membersBoxRef = useRef(null);

  const managers = [
    "Anurag Yadav",
    "Harsh Kumar",
    "Dhruva Singh",
    "Yash Dayal",
    "Anurag",
    "Harsh",
    "Dhruva",
    "Yash",
    "Anurag",
    "Harsh",
    "Dhruva",
    "Yash",
    "Anurag",
    "Harsh",
    "Dhruva",
    "Yash",
  ];
  const leaders = [
    "Arnav Bhist",
    "Ashutosh Yadav",
    "Promod Shukla",
    "Anuj Tiwari",
    "Deepak Jaiswal",
  ];
  const members = [
    "Deepika Kumari",
    "Kunal Mehta",
    "Ashish Pal",
    "Dev Dutta",
    "Harshit Kumar",
    "Mayank Yadav",
    "Virat Kumar",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleManagerSelect = (manager) => {
    setTeam((prevState) => ({ ...prevState, teamManager: manager }));
    setOpenPrManagerBox(false);
  };

  const handleLeaderSelect = (leader) => {
    setTeam((prevState) => ({ ...prevState, teamLeader: leader }));
    setOpenPrLeaderBox(false);
  };
  const handleMemberSelect = (member) => {
    setTeam((prevState) => {
      if (!prevState.teamMembers.includes(member)) {
        return {
          ...prevState,
          teamMembers: [...prevState.teamMembers, member],
        };
      }
      return prevState;
    });
  };

  const handleTeamMembersChange = (member) => {
    const updatedMembers = team.teamMembers.filter((m) => m !== member);
    setTeam({ ...team, teamMembers: updatedMembers });
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        managerBoxRef.current && !managerBoxRef.current.contains(e.target) &&
        leaderBoxRef.current && !leaderBoxRef.current.contains(e.target) &&
        membersBoxRef.current && !membersBoxRef.current.contains(e.target)
      ) {
        setOpenPrManagerBox(false);
        setOpenPrLeaderBox(false);
        setOpenPrMembersBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <div>
          <form
            action=""
            className="text-md text-slate-400 font-thin py-16 px-2 bg-slate-700"
            onSubmit={handleSubmit}
          >
            <div className="project-details border-4 border-slate-400 py-12 px-4 rounded-xl">
              <div className="z-30">
                <div className=""> Select Manager: </div>
                <div className="bg-slate-100 h-10 " ref={managerBoxRef}>
                  <div
                    className="flex justify-between -z-10"
                    onClick={() => setOpenPrManagerBox(!prManagerBox)}
                  >
                    <div className="content-center py-2 px-4">Select</div>
                    <div className="content-center">
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className="bg-white space-y-2 overflow-auto cursor-pointer">
                    {prManagerBox &&
                      managers.map((manager, index) => (
                        <div
                          className="flex gap-4 hover:bg-slate-900 px-4"
                          key={index}
                          onClick={() => handleManagerSelect(manager)}
                        >
                          <div className="w-8 h-8">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
                              alt=""
                              className="max-w-8 max-h-8 object-fill"
                            />
                          </div>
                          <div className="flex justify-between w-full px-2">
                            <div className="content-center">{manager}</div>
                            <div className="content-center">exp : 1 year</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="z-20">
                <div className="">Select Team Leader: </div>
                <div className="bg-slate-100 h-10 -z-10 " ref={leaderBoxRef}>
                  <div
                    className="flex justify-between"
                    onClick={() => setOpenPrLeaderBox(!prLeaderBox)}
                  >
                    <div className="content-center py-2 px-4">Select</div>
                    <div className="content-center">
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className="bg-white space-y-2 overflow-auto cursor-pointer">
                    {prLeaderBox &&
                      leaders.map((leader, index) => (
                        <div
                          className="flex gap-4 hover:bg-slate-900 px-4"
                          key={index}
                          onClick={() => handleLeaderSelect(leader)}
                        >
                          <div className="w-8 h-8 ">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
                              alt=""
                              className="max-w-8 max-h-8 object-fill"
                            />
                          </div>
                          <div className="flex justify-between w-full px-2">
                            <div className="content-center">{leader}</div>
                            <div className="content-center">exp : 1 year</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="z-10">
                <div className=""> + Members: </div>
                <div className="bg-slate-100 h-10 " ref={membersBoxRef}>
                  <div
                    className="flex justify-between -z-10"
                    onClick={() => setOpenPrMembersBox(!prMembersBox)}
                  >
                    <div className="content-center py-2 px-4">Select</div>
                    <div className="content-center">
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className="bg-white space-y-2 overflow-auto cursor-pointer">
                    {prMembersBox &&
                      members.map((member, index) => (
                        <div
                          className="flex gap-4 hover:bg-slate-900 px-4"
                          key={index}
                          onClick={() => handleMemberSelect(member)}
                        >
                          <div className="w-8 h-8">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
                              alt=""
                              className="max-w-8 max-h-8 object-fill"
                            />
                          </div>
                          <div className="flex justify-between w-full px-2">
                            <div className="content-center">{member}</div>
                            <div className="content-center">exp : 1 year</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center space-x-4 m-6 -z-10">
              <button
                className="min-w-24 py-2 text-white bg-green-600 "
                onClick={() => setOpenViewSelected(!openViewSelected)}
              >
               {openViewSelected?"Hide" : "View"}
              </button>
              <button className="min-w-24 py-2 text-white bg-blue-400 ">
                Save
              </button>
            </div>
          </form>
        </div>
        {openViewSelected && (
          <div className="min-h-96 bg-white">
            <div className="view-team-member-box">
              <div className="">
                <div className="team-member-type text-xl font-semibold text-slate-400">
                  Team Manager
                </div>
                <div className="px-2">
                  {team.teamManager && (
                    <div className="py-2 max-w-32">
                      <div className="flex justify-between">
                        <div className="w-8 h-8">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
                            alt=""
                            className="max-w-8 max-h-8 object-fill"
                          />
                        </div>
                        <div className="px-4 content-center">
                          <IoIosClose
                            className="text-xl bg-slate-400 rounded-full content-center"
                            onClick={() =>
                              setTeam({ ...team, teamManager: "" })
                            }
                          />
                        </div>
                      </div>
                      <div className="py-1 text-md font-normal">
                        {team.teamManager}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="">
                  <div className="team-member-type text-xl font-semibold text-slate-400">
                    Team Leader
                  </div>
                  <div className="px-2">
                    {team.teamLeader && (
                      <div className="py-2 max-w-32">
                        <div className="flex justify-between">
                          <div className="w-8 h-8">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
                              alt=""
                              className="max-w-8 max-h-8 object-fill"
                            />
                          </div>
                          <div className="px-4 content-center">
                            <IoIosClose
                              className="text-xl bg-slate-400 rounded-full content-center"
                              onClick={() =>
                                setTeam({ ...team, teamLeader: "" })
                              }
                            />
                          </div>
                        </div>
                        <div className="py-1 text-md font-normal">
                          {team.teamLeader}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="team-member-type text-xl font-semibold text-slate-400">
                  Team Members
                </div>
                <div className="team-members-box">
                  {team.teamMembers.map((member, index) => (
                    <div className="py-2 max-w-32" key={index}>
                      <div className="flex justify-between">
                        <div className="w-8 h-8">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
                            alt=""
                            className="max-w-8 max-h-8 object-fill"
                          />
                        </div>
                        <div className="px-4 content-center">
                          <IoIosClose
                            className="text-xl bg-slate-400 rounded-full content-center"
                            onClick={() => handleTeamMembersChange(member)}
                          />
                        </div>
                      </div>
                      <div className="py-1 text-md font-normal">{member}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectTeam;
