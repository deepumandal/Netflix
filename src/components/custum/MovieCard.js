import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ item }) => {
  return item?.poster_path ? (
    <div className="w-[180px] rounded-lg overflow-hidden flex-shrink-0 my-4 mx-2">
      <img className="" src={IMG_CDN_URL + item.poster_path} />
    </div>
  ) : (
    <></>
  );
};

export default MovieCard;
