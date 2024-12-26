import React from "react";
const Search = () => {
  return (
    <>
      <div className="mb-32">
        <div className="registration-heading text-center text-5xl font-bold text-slate-400 py-8">
          Search
        </div>
        <div className="mt-8">
          <div className="search-box space-y-8 w-2/3 mx-auto min-h-96 bg-yellow-600 content-center font-thin">
            <div className="search-select w-2/3 mx-auto ">
              <select name="" id="" className="py-2 px-4 w-full mx-auto outline-none">
                <option value="" >Select</option>
                <option value="">Employee ID</option>
                <option value="">Project ID</option>
              </select>
            </div>
            <div className="search-select w-2/3 mx-auto">
              <input type="text" className="w-full py-2 px-4 outline-none" placeholder="Employee ID / Project ID"/>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 bg-white hover:bg-green-700">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
