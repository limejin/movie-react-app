import { useState } from 'react';

const Modal = ({ setShowModal, movieLength }) => {
  const [movieName, setMovieName] = useState('');
  const [movieReview, setMovieReview] = useState('');
  const [movieImg, setMovieImg] = useState('');

  const handlecloseModal = () => {
    setShowModal(false);
  };

  const handleMovieNameInput = event => {
    setMovieName(event.target.value);
  };

  const handleMovieImgInput = event => {
    setMovieImg(event.target.value);
  };

  const handleMovieReviewInput = event => {
    setMovieReview(event.target.value);
  };

  const handleSubmitMovieButton = event => {
    event.preventDefault();

    fetch('https://reminiscent-friendly-maize.glitch.me/MOVIE_DATA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: movieLength + 1,
        name: movieName,
        review: movieReview,
        img: movieImg,
      }),
    }).then(res => {
      if (res.ok) {
        //alert('영화평이 추가되었습니다!🎉');
        setShowModal(false);
      }
    });
  };

  return (
    <>
      <div className='modal-background' id='modal'>
        <form className='modal' id='addMovieForm'>
          <span
            className='modal-close'
            id='closeModal'
            onClick={handlecloseModal}
          >
            X
          </span>
          <label htmlFor='name' className='label'>
            이름
          </label>
          <input
            id='name'
            type='text'
            placeholder='가디언즈 오브 갤럭시'
            className='input'
            maxLength='20'
            required
            value={movieName}
            onChange={handleMovieNameInput}
          />
          <label htmlFor='image' className='label'>
            이미지
          </label>
          <input
            id='image'
            type='text'
            placeholder='URL'
            className='input'
            required
            value={movieImg}
            onChange={handleMovieImgInput}
          />
          <label htmlFor='review' className='label'>
            리뷰
          </label>
          <input
            id='review'
            type='text'
            placeholder='감동적이고 재밌었어요!'
            className='input'
            required
            value={movieReview}
            onChange={handleMovieReviewInput}
          />
          <button
            type='submit'
            className='submit-button'
            onClick={handleSubmitMovieButton}
          >
            저장
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
