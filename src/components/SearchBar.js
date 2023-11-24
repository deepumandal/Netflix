import React, { memo, useEffect, useRef } from "react";
import AskGpt from "../utils/gptConfig";
import { NETFLIX_SERVER_BASE_URL, TMDB_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesSearchResults, setSearch } from "../reduxStore/GptSlice";
import axios from "axios";
const SearchBar = () => {
  const userGptQuerry = useRef(); // current.value
  const dispatch = useDispatch();
  const { searching } = useSelector((store) => store.gpt);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleClickOnSearchbtn = async (event) => {
    event.preventDefault();
    dispatch(setSearch());

    axios
      .post(NETFLIX_SERVER_BASE_URL + "/openai/connections", {
        question: userGptQuerry.current.value,
      })
      .then((res) => {
        const data = res.data;
        axios
          .post(NETFLIX_SERVER_BASE_URL + "/search/movie", data)
          .then((res) => {
            const { data } = res;
            console.log(data)
            dispatch(setMoviesSearchResults(data));
          });
      });

    // console.log("tmdbResults", tmdbResults);

    // dispatch(setMoviesSearchResults(tmdbResults));
  };

  useEffect(() => {
    return () => {
      searching && dispatch(setSearch());
    };
  }, []);
  return (
    <form
      className="bg-black w-1/2 py-3 px-3 rounded-lg flex justify-between"
      onSubmit={handleClickOnSearchbtn}
    >
      <input
        ref={userGptQuerry}
        type="text"
        placeholder="What do you want to watch..."
        className="px-4 py-2 w-[80%] outline-none rounded-lg"
      />
      <button
        //   onClick={handleClickOnSearchbtn}
        className="bg-red-600 text-white outline-none tracking-widest w-[18%] rounded-lg"
      >
        {searching ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

export default memo(SearchBar);
