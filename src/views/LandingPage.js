import React, { useEffect } from "react";
import {
  NowPlayingMovies,
  PopularMovies,
  TrendingMovies,
  getVideoApi,
} from "../api/auth.api";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentTrailer,
  addNowPlayingMovie,
  addPopularMovie,
  addTrendingMovie,
} from "../reduxStore/TrendingMovie";
import TrailerBackround from "../components/custum/TrailerBackround";
import TrailerCard from "../components/custum/TrailerCard";
import MovieLists from "../components/custum/movieLists";

const LandingPage = () => {
  const dispatch = useDispatch();

  const { trendingMovie, popularMovie, nowPlayingMovie } =
    useSelector((store) => store.trending) || [];
  console.log(trendingMovie, "trendingMovie");

  const parseTrendingMovie = (movies) => {
    if (!movies.length) return;
    const currentTrendingMovie = movies[1];

    getVideoApi(currentTrendingMovie?.id).then((response) => {
      const { results } = response?.data;

      const currentTrailer = results.filter(
        (provider) => provider?.type === "Trailer"
      );

      dispatch(
        addCurrentTrailer({
          mediaDetail: currentTrailer[0],
          movieDetail: currentTrendingMovie,
        })
      );
    });
  };

  useEffect(() => {
    const AbroadController = new AbortController();

    NowPlayingMovies(AbroadController.signal).then((res) => {
      dispatch(addNowPlayingMovie(res?.data?.results));
    });

    TrendingMovies(AbroadController.signal).then((res) => {
      parseTrendingMovie(res?.data?.results);
      dispatch(addTrendingMovie(res?.data?.results));
    });
    PopularMovies(AbroadController.signal).then((res) => {
      dispatch(addPopularMovie(res?.data?.results));
    });

    return () => {
      AbroadController && AbroadController?.abort();
    };
  }, []);
  return (
    <div className="bg-black">
      <div className="relative">
        <TrailerBackround />
        <TrailerCard />
      </div>

      {/* movie lists */}
      <div className="bg-gradient-to-b from-[#ffffff00] pl-4 to-black -mt-32 relative z-5">
        <MovieLists title={"Now Playing"} movies={nowPlayingMovie} />
        <MovieLists title={"Trending"} movies={trendingMovie} />
        <MovieLists title={"Popular"} movies={popularMovie} />
      </div>
    </div>
  );
};

export default LandingPage;

////
