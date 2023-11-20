import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

const TrailerBackround = () => {
  const currentTrailer = useSelector((store) => store.trending?.currentTrailer);

  const onReady = (event) => {
    // Remove the controls
    console.log("event", event?.target);
    // event.target.player?.controls = false;

    // Hide the title
    // const titleElement = event.target.player.querySelector(".ytp-title-link");
    // titleElement.style.display = "none";

    // Hide the YouTube logo
    // const logoElement = event.target.player.querySelector(".ytp-logo");
    // logoElement.style.display = "none";
  };

  if (!currentTrailer?.mediaDetail) return;
  const key = currentTrailer?.mediaDetail.key;
  return (
    <div
      className="overflow-hidden aspect-video w-full items-center bg-gradient-to-b from-[#000000]
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
    // <YouTube
    //   videoId={key}
    //   onReady={onReady}
    //   playerVars={{
    //     controls: 0,
    //     showinfo: 0,
    //     modestbranding: 0,

    //   }}
    // />
  );
};

export default TrailerBackround;
