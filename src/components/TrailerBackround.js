import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

const TrailerBackround = () => {
  const currentTrailer = useSelector((store) => store.trending?.currentTrailer);

  const handleOnload = (event) => {
    // const childDocument = event?.target?.contentWindow?.top?.document;
    // const childHtml = childDocument?.childNodes[1];
    // const childHead = childHtml?.childNodes[0];
    // const jsInjections = document.createElement("script");
    // jsInjections.setAttribute("defer", "");
    // jsInjections.innerHTML = `
    // const yt_title = document.getElementsByClassName("ytp-show-cards-title")
    // // yt_title.style.display = "none";
    // console.log("console from childHtml: " + yt_title.length)
    // `;
    // childHead.appendChild(jsInjections);
    // console.log("childDocument", event?.target?.contentWindow.postMessage());
  };

  if (!currentTrailer?.mediaDetail) return;
  const key = currentTrailer?.mediaDetail.key;
  return (
    <div
      className="overflow-hidden aspect-video w-full items-center 
    bg-gradient-to-b from-[#000000]   
    z-0
    bg-red
    h-[200px]
    md:h-[480px]
    lg:h-[700px]
     relative
    "
    >
      <iframe
        id="iframe_container"
        className="
        absolute
        top-[50%]
        left-[50%]
        w-[100%]
        aspect-video
        -translate-x-1/2 -translate-y-1/2
        "
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&showinfo=0&controls=0&modestbranding=1&rel=0&loop=1`}
        title="YouTube video player"
        onLoad={handleOnload}
      ></iframe>
    </div>
  );
};

export default TrailerBackround;
