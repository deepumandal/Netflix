import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  console.log("movies", "movies");
  return (
    <div className="">
      <h1
        className="text-white 
         font-bold mt-5 text-2xl"
      >
        {title}
      </h1>
      <div className="flex overflow-x-scroll w-screen m-auto  ">
        {movies?.map((item) => {
          return <MovieCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MovieLists;
