import React from "react";
import { useSelector } from "react-redux";

const TrailerCard = () => {
  const currentTrailer = useSelector((store) => store.trending?.currentTrailer);
  if (!currentTrailer?.movieDetail) return;
  const { original_title, overview } = currentTrailer?.movieDetail;

  return (
    <div className=" absolute top-0 h-full flex items-center text-white  w-screen bg-gradient-to-r from-[#000000a2]">
      <div className="mt-16 w-1/2 md:w-1/4 ml-4 md:mt-10  md:ml-8">
        <h1 className="text-xs sm:text-sm  md:text-2xl font-bold">
          {original_title}
        </h1>
        <p className="hidden md:inline-block py-6 text-sm ">{overview}</p>
        <div className="my-4 md:m-0  flex items-center">
          <button className=" bg-white text-black text-xs h-fit px-3 py-1 rounded-md whitespace-nowrap md:rounded-lg hover:bg-opacity-80 md:px-8 md:py-3">
            ▶️ Play
          </button>
          <button className=" bg-gray-500 text-white mx-3 bg-opacity-50 text-xs whitespace-nowrap px-3 py-1 rounded-md h-fit md:rounded-lg md:px-8 md:py-3 ">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerCard;
