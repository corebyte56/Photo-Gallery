import React from 'react'

const card = (props) => {
  const {elem} = props;
  return (
    <div>
      <a key={elem.id} href={elem.url} target="_blank" rel="noopener noreferrer">
        <div className='overflow-hidden rounded-xl hover:scale-105 transition-transform duration-200'>
          <img
            src={elem.download_url}
            alt={elem.author}
            className='w-64 h-auto object-cover'
            loading='lazy'
          />
        </div>
        <h2 className='text-white py-2 text-xl font-semibold'>{elem .author}</h2>
      </a>
    </div>
  )
}

export default card
