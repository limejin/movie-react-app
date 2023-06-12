import { useState } from 'react';
import Modal from '../components/Modal';

const LeftSide = ({ movieData }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddMovieButton = () => {
    setShowModal(true);
  };

  return (
    <div className='leftside' id='leftside'>
      <button
        type="'button"
        className='add-button'
        id='addMovie'
        onClick={handleAddMovieButton}
      >
        추가
      </button>
      {movieData.map(movie => (
        <span key={movie.id}>{movie.name}</span>
      ))}
      {showModal && (
        <Modal setShowModal={setShowModal} movieLength={movieData.length} />
      )}
    </div>
  );
};

export default LeftSide;
