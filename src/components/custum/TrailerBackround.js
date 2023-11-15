import React, { useRef } from "react";
import { useSelector } from "react-redux";

const TrailerBackround = () => {
  const currentTrailer = useSelector((store) => store.trending?.currentTrailer);
  if (!currentTrailer?.mediaDetail) return;
  const key = currentTrailer?.mediaDetail.key;

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-screen aspect-video overflow-hidden"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&showinfo=0&controls=0&modestbranding=0&rel=0&loop=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default TrailerBackround;
