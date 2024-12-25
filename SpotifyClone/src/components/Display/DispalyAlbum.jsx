import React from "react";
import { albumsData, assets, songsData } from "../../assets/assets";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";

const DispalyAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center-end">
        <img src={albumData.image} className="w-48 rounded" alt="image" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-3xl mt-5 font-bold mb-4 md:text-5xl">
            {albumData.name}
          </h2>
          <h5>{albumData.desc}</h5>
          <p className="mt-3">
            <img
              src={assets.spotify_logo}
              className="w-5 inline-block"
              alt="image"
            />
            <b className="px-4">Spotify</b>
            .1,321 likes .<b>50 songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-400 hover:bg-[#ffffff2b] cursor-pointer "
        >
          <p className="text-white">
            <b className="mr-4 font-light text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DispalyAlbum;
