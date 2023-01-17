import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "./Components/MovieCard/MovieCard" 
import './description.css'
export const Descriptioon = ( { movies } ) => {
    const { movieId } = useParams();
const navigate=useNavigate();
  return (
    <div  className="Card-section1">
      {movies
        .filter(movie => movie.id == movieId)
        .map((movie) => (
        <MovieCard className="Card-section2" movie={movie} key={movie.id} />
      ))}
   <div className='Card-section3'> <Button varient='Secondary' onClick={() => navigate(-1)} >back  </Button></div>
  </div>
  );
}
export default Descriptioon;
