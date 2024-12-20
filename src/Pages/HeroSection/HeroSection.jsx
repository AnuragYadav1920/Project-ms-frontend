import React, { useState } from "react";

const HeroSection = () => {
  const [openFullView, setOpenFullView] = useState(false);
  return (
    <>
      <div className="">
        <div className="relative my-8  mx-auto">
          <div className="hero-top h-full text-gray-50 content-center z-20 backdrop-blur-3xl">
            <h1 className="text-5xl font-semibold py-8 text-yellow-600">
              Welcome to the OMS platform.
            </h1>
            <p className=" font-thin py-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Modi at eveniet
              itaque veniam reiciendis doloribus facilis iure, velit provident
              accusamus, dolor aperiam fugiat magni fugit rerum nobis? Ipsam
              nesciunt unde ex nam ipsum numquam dolore id inventore aperiam
              vero, illo animi libero explicabo earum expedita, impedit officiis
              alias commodi labore. Ad recusandae esse ab consequatur aperiam
              explicabo fugit! Porro, tempora! Quaerat nisi asperiores officia
              odio recusandae sit nam aut maxime neque dolor vitae, veniam fuga
              laudantium ad eveniet accusamus a? Sit nobis numquam corporis
              voluptatum necessitatibus, veritatis ex expedita. Ipsum,
              consequuntur nobis.
            </p>
            <button className="py-2 px-4 shadow-md  rounded-full content-center my-4 text-green-700">
              create account{" "}
            </button>
          </div>
          <div className="absolute top-10 z-10 right-0 opacity-40">
            <img
              src="./images/developers.png"
              alt=""
              className="w-80 h-80 object-fill"
            />
          </div>
        </div>
        <div className=" w-3/4 pb-8 mx-auto">
          <div>
            <p className="font-thin text-gray-400">
              <span className="text-yellow-600 text-lg font-semibold">
                I've created{" "}
              </span>{" "}
              this website to help individuals and teams plan, organize, and
              manage tasks efficiently. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas ipsam saepe quibusdam iure quos? Corrupti
              expedita consequatur nam deleniti quasi ullam, fugit temporibus
              numquam asperiores sint iusto ab ipsa illo assumenda, alias,
              consectetur sunt? Vitae quis quaerat ducimus vero. Sed voluptatem
              eligendi repellendus fugiat ipsam, provident blanditiis dolor quo
              alias quas, est, aliquid eius amet qui natus. Consequatur,
              nesciunt? Quia quos fuga quibusdam eaque, libero magni hic
              exercitationem, ut assumenda aliquam modi molestiae nam? Veniam
              officiis optio ipsa doloribus quisquam possimus laboriosam, id
              atque. Veritatis quas illo possimus itaque veniam asperiores
              maxime id, hic ipsum nam dolores sapiente quibusdam quisquam?
            </p>
          </div>
        </div>
        <div className="w-full pb-16">
          <div className="">
            <div className="relative">
              <img
                src="./images/developers.png"
                alt=""
                className="w-16 h-16 object-fill bg-gray-500 rounded-full mx-auto z-20 p-2"
              />
              <div className="w-full absolute top-8 h-1 font-bold bg-gray-500 -z-10 rounded-full"></div>
            </div>
            <div className="text-center font-semibold text-xl text-yellow-600 pt-4">
              Anurag Yadav
            </div>
          </div>
        </div>
        <div className="pb-16">
          <div className="text-4xl text-center py-8 font-medium text-slate-400">
            Trusted By several user
          </div>
          <div
            className="testimonials-cards-box py-8"
            style={
              openFullView
                ? { height: "auto", overflow: "auto" }
                : { height: "40vh", overflow: "hidden" }
            }
          >
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
            <div className=" h-56 bg-white"></div>
          </div>
          <div className="text-center backdrop-brightness-95 py-4 ">
            <button
              className="px-4 py-2 bg-slate-400 "
              onClick={() => setOpenFullView(!openFullView)}
            >
              {
                openFullView?'okey i get it.':'See more...'
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
