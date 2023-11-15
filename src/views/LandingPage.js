import React, { useEffect } from "react";
import { TrendingMovies, getVideoApi } from "../api/auth.api";
import { useDispatch } from "react-redux";
import {
  addCurrentTrailer,
  addTrendingMovie,
} from "../reduxStore/TrendingMovie";
import TrailerBackround from "../components/custum/TrailerBackround";
import TrailerCard from "../components/custum/TrailerCard";

const LandingPage = () => {
  const dispatch = useDispatch();

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

    TrendingMovies(AbroadController.signal).then((res) => {
      parseTrendingMovie(res?.data?.results);
      dispatch(addTrendingMovie(res?.data?.results));
    });

    return () => {
      AbroadController?.abort();
    };
  }, []);
  return (
    <div>
      <div>
        <TrailerCard />
        <TrailerBackround />
      </div>
    </div>
  );
};

export default LandingPage;

////
