import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Card = ({ elem }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={elem.url} target="_blank" rel="noopener noreferrer">
        <div className='overflow-hidden rounded-xl'>
          <img
            src={elem.src.medium}  // ✅ Correct property from Pexels API
            alt={elem.photographer}
            className='w-64 h-auto object-cover'
            loading='lazy'
          />
        </div>
        <h2 className='text-white py-2 text-xl font-semibold'>{elem.photographer}</h2>
      </a>
    </div>
  );
};

export default Card;