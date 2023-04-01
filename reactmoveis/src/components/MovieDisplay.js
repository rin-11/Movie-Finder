// We Must Import the React Library
import React from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
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
    //Ternanry operator will determin which functions JSX we will return
    return movie ? loaded() : loading();
};


// We must export the component to use it in other files
export default MovieDisplay;
