import { useState } from 'react';
import { arrowButton } from '../config';
import '../style/Slider.css';

const Slider = ({ imageUrl, imageText }) => {
  const [count, setCount] = useState(0);

  const arrowPrev = () => {
    if (count === 0) {
      setCount(imageUrl.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const arrowNext = () => {
    if (count === imageUrl.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const arrowDisplayLeft = () => {
    if (imageUrl.length !== 1) {
      return (
        <img className='slider-arrow-left' onClick={arrowPrev} src={arrowButton} alt="Flèche gauche" />
      );
    }
  };

  const arrowDisplayRight = () => {
    if (imageUrl.length !== 1) {
      return (
        <img className='slider-arrow-right' onClick={arrowNext} src={arrowButton} alt="Flèche droite" />
      );
    }
  };

  return (
    <section className='slider_container'>
      {arrowDisplayLeft()}
      <img className='slider-img' src={imageUrl[count]} alt={imageText} />
      <p>{count + 1} / {imageUrl.length}</p>
      {arrowDisplayRight()}
    </section>
  );
};

export default Slider;