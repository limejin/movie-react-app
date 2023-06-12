const RightSide = ({ movieData }) => {
  return (
    <section className='container' id='container'>
      {movieData.map(movie => (
        <div className='card' key={movie.id}>
          <img src={movie.img} alt={movie.name} />
          <span className='movie-title'>&lt;{movie.name}&gt;</span>
          <span className='movie-review'>{movie.review}</span>
        </div>
      ))}
    </section>
  );
};

export default RightSide;
