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
import TrailerBackround from "../components/TrailerBackround";
import TrailerCard from "../components/TrailerCard";
import MovieLists from "../components/MovieLists";
import GptPage from "./GptPage";

const LandingPage = () => {
  const dispatch = useDispatch();

  const { trendingMovie, popularMovie, nowPlayingMovie } =
    useSelector((store) => store.trending) || [];
  const { isGptPage } = useSelector((store) => store.gpt);

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
    if (!nowPlayingMovie.length) {
      NowPlayingMovies(AbroadController.signal).then((res) => {
        dispatch(addNowPlayingMovie(res?.data?.results));
      });
    }
    if (!trendingMovie.length) {
      TrendingMovies(AbroadController.signal).then((res) => {
        parseTrendingMovie(res?.data?.results);
        dispatch(addTrendingMovie(res?.data?.results));
      });
    }
    if (!popularMovie.length) {
      PopularMovies(AbroadController.signal).then((res) => {
        dispatch(addPopularMovie(res?.data?.results));
      });
    }
    return () => {
      AbroadController && AbroadController?.abort();
    };
  }, []);
  return (
    <div className="bg-black">
      {isGptPage ? (
        <GptPage />
      ) : (
        <>
          <div className="relative w-screen aspect-video">
            <TrailerBackround />
            <TrailerCard />
          </div>
          {/* movie lists */}
          <div className="bg-gradient-to-b from-[#ffffff00] pl-2 md:pl-4 to-black -mt-16 sm:-mt-28 md:-mt-40 relative z-5">
            <MovieLists title={"Now Playing"} movies={nowPlayingMovie} />
            <MovieLists title={"Trending"} movies={trendingMovie} />
            <MovieLists title={"Popular"} movies={popularMovie} />
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;

////
