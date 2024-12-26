import React from "react";
import {NavLink} from "react-router-dom"

const SidebarLinkBox = ({data}) => {
  return (
    <>
      <div className="w-60 min-h-72 bg-slate-500 font-thin text-md text-center py-4 px-6 content-center space-y-4">
        {data?.map((linkTab, index) => (
          <div className="py-2 border-2 border-slate-400 hover:bg-slate-950 hover:text-yellow-600 " key={index}>
            <NavLink to={linkTab.urlParams}>{linkTab.link}</NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
export default SidebarLinkBox;
