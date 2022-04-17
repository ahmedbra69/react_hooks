import React from 'react';
import MovieCard from './MovieCard';

function MovieList({movies}) {
  return (
    <div className='divforlist'>
       {movies.map((movies,i)=><MovieCard movies={movies} key={i}/>)}
      </div>
  )
}

export default MovieList