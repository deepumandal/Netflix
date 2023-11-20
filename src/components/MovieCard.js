import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ item }) => {
  return item?.poster_path ? (
    <div className=" w-36 md:w-[180px] pr-2 rounded-md overflow-hidden flex-shrink-0">
      <img className="" src={IMG_CDN_URL + item.poster_path} />
    </div>
  ) : (
    <></>
  );
};

export default MovieCard;
