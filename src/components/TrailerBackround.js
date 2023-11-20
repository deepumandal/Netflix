import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const TrailerBackround = () => {
  const currentTrailer = useSelector((store) => store.trending?.currentTrailer);

  if (!currentTrailer?.mediaDetail) return;
  const key = currentTrailer?.mediaDetail.key;
  return (
    <div
      className="overflow-hidden aspect-video w-screen items-center bg-gradient-to-b from-[#000000]
    z-0
    bg-red-500
    h-[200px]
    md:h-[600px]   
    lg:h-[700px]
     relative    
    "
    >
      <iframe
        className="
        absolute
        top-[50%]
        left-[50%]
        w-[100%]
        aspect-video
        -translate-x-1/2 -translate-y-1/2
        "
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&showinfo=0&controls=0&modestbranding=0&rel=0&loop=1`}
        title="YouTube video player"
        loop
      ></iframe>
    </div>
  );
};

export default TrailerBackround;
