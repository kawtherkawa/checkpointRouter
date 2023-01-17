import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css';

const MovieList = ({movies,inputSearch,}) => {
  return (
    <div className='List-flex'>
        {movies.filter( movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase()))
        .map(movie=><MovieCard movie={movie} key={movie.id} />)}
    </div>
  )
}

export default MovieList