import React from "react";
import { backgroundImage } from "../utils/constants";
import SearchBar from "../components/custum/SearchBar";
import { useSelector } from "react-redux";
import MovieLists from "../components/custum/movieLists";
import GptMovieSuggestions from "../components/custum/GptMovieSuggestions";

const GptPage = () => {
  const { searchResults } = useSelector((store) => store.gpt);
  return (
    <div>
      <div className="fixed top-0 bottom-0 left-0 right-0">
        <img
          src={backgroundImage}
          className="absolute w-full h-full top-0 left-0 bottom-0 right-0"
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-[#000000] via-transparent to-[#00000068] bg-opacity-10"></div>
      </div>

      <div className="z-2 relative flex justify-center pt-52 ">
        <SearchBar />
      </div>

      <div className="z-2 relative w-full m-auto ">
        {/* {searchResults.length && (
          <div className="w-full bg-gradient-to-b from-transparent to-black overflow-x-hidden">
            <MovieLists
              isgptlist={true}
              title={"Your Search Results"}
              movies={searchResults}
            />
          </div>
        )} */}

        {searchResults.length && (
          <div className="w-full bg-gradient-to-b from-transparent to-black overflow-x-hidden">
            {searchResults?.map((suggestedMovie) => {
              return (
                <GptMovieSuggestions
                  key={suggestedMovie?.id}
                  suggestedMovie={suggestedMovie}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GptPage;
