import React from 'react';

const Card = ({ elem }) => {
  return (
    <div>
      <a href={elem.url} target="_blank" rel="noopener noreferrer">
        <div className='overflow-hidden rounded-xl'>
          <img
            src={elem.download_url}
            alt={elem.author}
            className='w-64 h-auto object-cover'
            loading='lazy'
          />
        </div>
        <h2 className='text-white py-2 text-xl font-semibold'>{elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;