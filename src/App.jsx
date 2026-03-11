import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [idx, setIndex] = useState(1)
  useEffect(() => {
    Photogallery();

    return () => {
    }
  },[idx] )

  const Photogallery = async () => {
    const res = await fetch(`https://picsum.photos/v2/list?page=${idx}&limit=100`);
    let data = await res.json();
    setUserData(data)
  }
  let printUserData = <div className='bg-black h-screen w-screen'>
    <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3></div>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem) {
      return <a key={elem.id} href={elem.url}>
        <div className='h-50 overflow-hidden rounded-xl'> 
          <img className='w-full h-full object-cover' src={elem.download_url} alt="" />
        </div>
        <div>
          <h2 className='text-white py-2.5 text-2xl font-semibold'>{elem.author}</h2>
        </div>
      </a>
    })
  }
  return (
    <div className="bg-black h-auto">
      <div className='flex flex-wrap gap-7 py-6 px-5 justify-center'>
        {printUserData}
      </div>


    </div>
  )
}

export default App
