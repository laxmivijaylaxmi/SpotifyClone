import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="h-full w-[25%] text-white p-2 flex-col gap-2 hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="logo" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="logo" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%]">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt=" stack" className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt=" arrow" className="w-5" />
            <img src={assets.plus_icon} alt=" plus" className="w-5" />
          </div>
        </div>
        <div className="bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-6 p-5 mt-7 ">
          <h1>Create your First playlist</h1>
          <p className="font-light">it's easy we wil help you</p>
          <button className="bg-white py-1.5 px-4 text-[17px] rounded-full mt-4 text-black">
            Create Playlist
          </button>
        </div>

        <div className="bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-6 p-5 mt-4 ">
          <h1>Let's findsome podcasts to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="bg-white py-1.5 px-4 text-[17px] rounded-full mt-4 text-black">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
