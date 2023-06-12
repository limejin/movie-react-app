import { useState } from 'react';
import { MOVIE_DATA } from './data/movieData';

const RightSide = () => {
  const [movieData, setMovieData] = useState(MOVIE_DATA);
  return (
    <section class='container' id='container'>
      {movieData.map(movie => (
        <>
          <div class='card'>
            <img src={movie.img} alt={movie.name} />
            <span class='movie-title'>&lt;{movie.name}&gt;</span>
            <span class='movie-review'>{movie.review}</span>
          </div>
        </>
      ))}
    </section>
  );
};

export default RightSide;
