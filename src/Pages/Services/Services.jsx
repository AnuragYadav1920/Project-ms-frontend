import React from "react";

const Services = () => {
  return (
    <>
      <div className="container my-8">
        <div className='font-thin text-md text-gray-400 py-8'>Services /</div>
        <div className="text-center">
          <span className="font-semibold text-2xl py-8 text-yellow-600">Pricing</span>
          <p className="font-normal py-8 text-gray-400">Sign up in less than 30 seconds. Try out our 7 days free trial. Upgrade to paid ones if find interesting.</p>
        </div>
        <div className="flex gap-6 justify-center py-8 flex-wrap">
          <div className="w-64 h-96 bg-gray-300  py-12 transition-transform pricing-box">
            <div className="text-center font-semibold text-xl ">Monthly</div>
            <div className="flex gap-1 justify-center py-4">
              <span className="font-semibold text-xl content-end">$</span>
              <span className="font-thin content-end">
                <span className="font-bold text-5xl">3</span>/mo
              </span>
            </div>
            <div className="py-8 px-4">
              <ul className="text-md font-normal text-gray-600">
                <li>✅ feature 1</li>
                <li>✅ feature 2</li>
                <li>✅ feature 3</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="px-4 py-2 text-sm shadow-lg font-semibold rounded-md hover:bg-green-600 hover:text-white ">
                SIGN UP TODAY
              </button>
            </div>
          </div>
          <div className="w-64 h-96 bg-gray-300 py-12 transition-transform pricing-box">
            <div className="text-center font-semibold text-xl ">6 Months</div>
            <div className="flex gap-1 justify-center py-4">
              <span className="font-semibold text-xl content-end">$</span>
              <span className="font-thin content-end">
                <span className="font-bold text-5xl">2.5</span>/mo
              </span>
            </div>
            <div className="py-8 px-4">
              <ul className="text-md font-normal text-gray-600">
                <li>✅ feature 1</li>
                <li>✅ feature 2</li>
                <li>✅ feature 3</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="px-4 py-2 text-sm shadow-lg font-semibold rounded-md hover:bg-green-600 hover:text-white ">
                SIGN UP TODAY
              </button>
            </div>
          </div>
          <div className="w-64 h-96 bg-gray-300 py-12 transition-transform pricing-box">
            <div className="text-center font-semibold text-xl ">Yearly</div>
            <div className="flex gap-1 justify-center py-4">
              <span className="font-semibold text-xl content-end">$</span>
              <span className="font-thin content-end">
                <span className="font-bold text-5xl">2</span>/mo
              </span>
            </div>
            <div className="py-8 px-4">
              <ul className="text-md font-normal text-gray-600">
                <li>✅ feature 1</li>
                <li>✅ feature 2</li>
                <li>✅ feature 3</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="px-4 py-2 text-sm shadow-lg font-semibold rounded-md hover:bg-green-600 hover:text-white ">
                SIGN UP TODAY
              </button>
            </div>
          </div>
        </div>
        <div className="my-8 mx-auto w-3/4 pb-8">
          <span className="font-semibold text-2xl text-yellow-600 py-4">Services which we provides</span>
          <ul className="text-md font-normal text-gray-400 py-4">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos cum unde ratione impedit voluptatibus earum vitae hic molestias minus.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit tenetur explicabo nemo alias, pariatur consectetur sint! Dolorem iure corrupti veritatis deleniti quae voluptas temporibus doloremque cum recusandae nam reiciendis officia possimus, totam sint, dicta sed tempore. Corporis, nisi molestias.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos cum unde ratione impedit voluptatibus earum vitae hic molestias minus.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit tenetur explicabo nemo alias, pariatur consectetur sint! Dolorem iure corrupti veritatis deleniti quae voluptas temporibus doloremque cum recusandae nam reiciendis officia possimus, totam sint, dicta sed tempore. Corporis, nisi molestias.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos cum unde ratione impedit voluptatibus earum vitae hic molestias minus.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit tenetur explicabo nemo alias, pariatur consectetur sint! Dolorem iure corrupti veritatis deleniti quae voluptas temporibus doloremque cum recusandae nam reiciendis officia possimus, totam sint, dicta sed tempore. Corporis, nisi molestias.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos cum unde ratione impedit voluptatibus earum vitae hic molestias minus.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit tenetur explicabo nemo alias, pariatur consectetur sint! Dolorem iure corrupti veritatis deleniti quae voluptas temporibus doloremque cum recusandae nam reiciendis officia possimus, totam sint, dicta sed tempore. Corporis, nisi molestias.</li>
                      
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
