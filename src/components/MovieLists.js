import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies, isgptlist }) => {
  return (
    <div className="">
      <h1
        className="text-white 
        text-sm
         font-bold mt-5 md:text-2xl"
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
