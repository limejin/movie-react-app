import { useState } from 'react';
import { MOVIE_DATA } from './data/movieData';

const LeftSide = () => {
  const [movieData, setMovieData] = useState(MOVIE_DATA);

  return (
    <div class='leftside' id='leftside'>
      <button type="'button" class='add-button' id='addMovie'>
        추가
      </button>
      {movieData.map(movie => (
        <span key={movie.id}>{movie.name}</span>
      ))}
    </div>
  );
};

export default LeftSide;
