import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DispalyAlbum from "./DispalyAlbum";
import { albumsData } from "../../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const loaction = useLocation();
  const isAlbum = location.pathname.includes("album");
const albumId = isAlbum ? loaction.pathname.slice(-1) :"";

const bgColor = albumsData[Number(albumId)].bgColor;
useEffect(()=>{
  if(isAlbum){
    displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
  }else{
    displayRef.current.style.background = `#121212`
  }
})

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white  overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DispalyAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
