import { useEffect, useState } from 'react';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import useMovieDataFetch from '../hooks/useMovieDataFetch';

const Main = () => {
  // const movieData = useMovieDataFetch();
  const [movieDataLive, setMovieDataLive] = useState([]);

  useEffect(() => {
    fetch('https://reminiscent-friendly-maize.glitch.me/MOVIE_DATA')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMovieDataLive(data);
      });
  }, []);

  return (
    <main>
      <LeftSide
        movieDataLive={movieDataLive}
        setMovieDataLive={setMovieDataLive}
      />
      <RightSide movieDataLive={movieDataLive} />
    </main>
  );
};

export default Main;
