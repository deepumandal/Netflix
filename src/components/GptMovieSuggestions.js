import React from "react";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = ({ suggestedMovie }) => {
  return (
    <div className=" pl-10">
      <h1
        className="text-white 
         font-bold mt-5 text-2xl"
      >
        {suggestedMovie?.[0]?.original_title}
      </h1>
      <div className={"flex overflow-x-scroll w-full m-auto"}>
        {suggestedMovie?.map((item) => {
          return <MovieCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
