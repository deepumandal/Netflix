import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies, isgptlist }) => {
  console.log(
    "movieList",
    isgptlist ? "flex w-fit flex-wrap" : "flex overflow-x-scroll w-full m-auto"
  );
  return (
    <div className="">
      <h1
        className="text-white 
         font-bold mt-5 text-2xl"
      >
        {title}
      </h1>
      <div
        className={
          isgptlist
            ? "flex w-fit flex-wrap"
            : "flex overflow-x-scroll w-full m-auto"
        }
      >
        {movies?.map((item) => {
          return <MovieCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MovieLists;
