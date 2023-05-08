import React from "react";

const MovieDisplay = ({ movie }) => {
  //The component must return some JSX
  const loaded = () => {
  return (
    <>
      <h2>{movie.Title}</h2>
      <h4>{movie.Genre}</h4>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Year}</h3>
    </>
  );
};

    //function to return loading JSX
    const loading = () => {
        return <h2>No Movie to Display</h2>
    };

    return movie ? loaded() : loading();
};

export default MovieDisplay;
