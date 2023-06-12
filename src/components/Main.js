import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import useMovieDataFetch from '../hooks/useMovieDataFetch';

const Main = () => {
  const movieData = useMovieDataFetch();

  return (
    <main>
      <LeftSide movieData={movieData} />
      <RightSide movieData={movieData} />
    </main>
  );
};

export default Main;
