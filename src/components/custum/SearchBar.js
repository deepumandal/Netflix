import React, { memo, useEffect, useRef } from "react";
import AskGpt from "../../utils/gptConfig";
import { TMDB_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesSearchResults, setSearch } from "../../reduxStore/GptSlice";

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
    const querry =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      userGptQuerry.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await AskGpt.chat.completions.create({
      messages: [{ role: "user", content: querry }],
      model: "gpt-3.5-turbo",
    });

    if (!chatCompletion.choices) {
      // TODO: Write Error Handling
    }

    console.log(chatCompletion.choices?.[0]?.message?.content);
    const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log("tmdbResults", tmdbResults);

    dispatch(setMoviesSearchResults(tmdbResults));
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
        placeholder="What do you wish to watch..."
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
