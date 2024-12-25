import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]); // Initial track
  const [play, setPlay] = useState(false); // Whether the audio is playing
  const [time, setTime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 },
  });

  // Track change effect: Update audio source and play the track
  useEffect(() => {
    if (audioRef.current) {
      // Update the audio source to the new track
      audioRef.current.src = track.file;

      // Reset current time to 0 whenever track changes (optional)
      audioRef.current.currentTime = 0;

      // Play the new track
      if (play) {
        audioRef.current.play();
      }
    }
  }, [track]); // This effect runs every time the track state changes

  // Handle time updates when the song is playing
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.onloadedmetadata = () => {
        setTime({
          currentTime: {
            second: Math.floor(audio.currentTime % 60),
            minute: Math.floor(audio.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audio.duration % 60),
            minute: Math.floor(audio.duration / 60),
          },
        });
      };

      audio.ontimeupdate = () => {
        if (audio.currentTime && audio.duration) {
          setTime({
            currentTime: {
              second: Math.floor(audio.currentTime % 60),
              minute: Math.floor(audio.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audio.duration % 60),
              minute: Math.floor(audio.duration / 60),
            },
          });
        }
      };
    }
  }, [track]);

  // Play the song
  const Playing = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlay(true);
    }
  };

  // Pause the song
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlay(false);
    }
  };

  // Next song logic
  const next = () => {
    const currentIndex = songsData.indexOf(track);
    const nextIndex = (currentIndex + 1) % songsData.length;
    setTrack(songsData[nextIndex]); // Change track
    setPlay(true); // Automatically play the next track
  };

  // Previous song logic
  const prev = () => {
    const currentIndex = songsData.indexOf(track);
    const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
    setTrack(songsData[prevIndex]);
    setPlay(true); 
  };

 
  const contextValue = {
    seekBar,
    seekBg,
    audioRef,
    track,
    setTrack,
    play,
    setPlay,
    time,
    setTime,
    Playing,
    pause,
    next,
    prev,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      <audio ref={audioRef} src={track.file} />
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
