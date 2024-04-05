"use client";
import React, { useEffect, useState } from "react";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await res.json();
    console.log(res);
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>movies : {isLoading ? "loading...." : JSON.stringify(movies)}</div>
  );
}

export default Movies;
