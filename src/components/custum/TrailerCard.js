import React from "react";
import { useSelector } from "react-redux";

const TrailerCard = () => {
  const currentTrailer = useSelector((store) => store.trending?.currentTrailer);
  if (!currentTrailer?.movieDetail) return;
  const { original_title, overview } = currentTrailer?.movieDetail;

  return (
    <div className=" absolute top-0 h-full flex items-center text-white  w-screen bg-gradient-to-r from-[#000000a2]">
      <div className=" mt-10 w-1/4 ml-8">
        <h1 className="text-2xl  font-bold">{original_title}</h1>
        <p className="hidden md:inline-block py-6 text-sm ">{overview}</p>
        <div className="my-4 md:m-0">
          <button className=" bg-white text-black  px-8 py-3 rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="px-8 py-3 bg-gray-500 text-white mx-3 bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerCard;
