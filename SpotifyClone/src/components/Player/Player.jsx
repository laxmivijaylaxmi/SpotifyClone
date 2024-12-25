import React, { useContext } from "react";
import { assets, songsData } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerContext";

const Player = () => {
  const { seekBar, track, seekBg, Playing, pause, play,time,next ,prev} = useContext(PlayerContext);
  return (
    <div className="h-[10%] flex justify-between items-center px-4 bg-black text-white">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc}</p>
        </div>
      </div>
      <div className="flex flex-col m-auto gap-1 items-center">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            className="w-4 cursor-pointer"
            alt=""
          />
          <img
            src={assets.prev_icon}
            className="w-4 cursor-pointer"
            alt="img"
            onClick={prev}
          />

          {
           play ?   <img
            onClick={pause}
            src={assets.pause_icon}
            className="w-4 cursor-pointer"
            alt="img"
          /> :     <img
            onClick={Playing}
            src={assets.play_icon}
            className="w-4 cursor-pointer"
            alt="img"
          />
          }

      
         
          <img
            src={assets.next_icon}
            className="w-4 cursor-pointer"
            alt="img"
            onClick={next}
          />

          <img
            src={assets.loop_icon}
            className="w-4 cursor-pointer"
            alt="img"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute} :{time.currentTime.second}</p>
          <div
            ref={seekBg}
            className="rounded-full cursor-pointer w-[60vw] max-w-[500px] bg-gray-300"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            ></hr>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="" className="w-4" />
        <img src={assets.mic_icon} alt="" className="w-4" />
        <img src={assets.queue_icon} alt="" className="w-4" />
        <img src={assets.speaker_icon} alt="" className="w-4" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.volume_icon} alt="" className="w-4" />
        <img src={assets.mini_player_icon} alt="" className="w-4" />
        <img src={assets.zoom_icon} alt="" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
