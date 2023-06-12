import { useEffect, useState } from 'react';

const useMovieDataFetch = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch('https://reminiscent-friendly-maize.glitch.me/MOVIE_DATA')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMovieData(data);
      });
  }, []);

  return movieData;
};

export default useMovieDataFetch;
