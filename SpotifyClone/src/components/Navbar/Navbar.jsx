import React from "react";
import { assets } from "../../assets/assets";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => { 
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left} onClick={()=>navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
          <img
            src={assets.arrow_right} onClick={()=>(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-3xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[17px] cursor-pointer">
            Install App
          </p>
          <p className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-black  ">
            V
          </p>
          {/* <p className="flex items-center justify-center cursor-pointer">
            <FaUserCircle />
          </p> */}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <p className="bg-white text-black px-3 py-1 rounded-3xl cursor-pointer ">
          All{" "}
        </p>
        <p className="px-4 py-1 rounded-2xl text-white cursor-pointer">Music</p>
        <p className="px-4 py-1 rounded-2xl text-white cursor-pointer">
          Podcasts
        </p>
      </div>
    </div>
  );
};

export default Navbar;
