import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [idx, setIndex] = useState(1);

  const Photogallery = async () => {
    try {
      const res = await fetch(`https://api.pexels.com/v1/curated?per_page=30&page=${idx}`, {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY
        }
      });
      if (!res.ok) throw new Error('Network response not ok');
      const data = await res.json();
      setUserData(data.photos); // ✅ এখানে data.photos map করতে হবে
    } catch (err) {
      console.error('Fetch failed:', err);
      setUserData([]);
    }
  };

  useEffect(() => {
    Photogallery();
  }, [idx]);

  let printUserData = (
    <div className='bg-black h-screen w-screen'>
      <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
        Loading...
      </h3>
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem) => (
      <Card key={elem.id} elem={elem} />
    ));
  }

  return (
    <div className="bg-black h-auto">
      <h1 className="text-white text-4xl font-bold text-center my-8">
        📸 Photo Gallery
      </h1>

      <div className='flex flex-wrap gap-7 py-6 px-5 justify-center'>
        {printUserData}
      </div>

      <div className='py-9 flex justify-center gap-20'>
        <button
          className='text-white px-4 py-2 text-[20px] border border-transparent font-medium bg-amber-600 rounded-lg hover:scale-105 transition-transform hover:bg-transparent hover:border hover:border-amber-600 hover:text-amber-600 duration-200 cursor-pointer'
          onClick={() => { if (idx > 1) setIndex(idx - 1) }}
        >
          Prev
        </button>

        <h3 className='text-white text-4xl font-bold'>{idx}</h3>

        <button
          className='text-white px-4 py-2 text-[20px] border border-transparent font-medium bg-amber-600 rounded-lg hover:scale-105 transition-transform hover:bg-transparent hover:border hover:border-amber-600 hover:text-amber-600 duration-200 cursor-pointer'
          onClick={() => setIndex(idx + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;