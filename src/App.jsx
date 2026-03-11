import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [idx, setIndex] = useState(1)
  useEffect(() => {
    Photogallery();

    return () => {
    }
  }, [idx])

  const Photogallery = async () => {
    const res = await fetch(`https://picsum.photos/v2/list?page=${idx}&limit=30`);
    let data = await res.json();
    setUserData(data)
  }
  let printUserData = <div className='bg-black h-screen w-screen'>
    <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3></div>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={elem.idx}>
        <Card elem={elem} />
      </div>
    })
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
        <button className='text-white px-4 py-2 text-[20px] border border-transparent font-medium bg-amber-600 rounded-lg hover:scale-105 transition-transform hover:bg-transparent hover:border hover:border-amber-600 hover:text-amber-600 duration-200 cursor-pointer'
        onClick={()=>{
          if(idx > 1){
            setIndex(idx - 1);
            setUserData([])

          }
        }}>Prev</button>

        <h3 className='text-white text-4xl font-bold'>{idx}</h3>

        <button className='text-white px-4 py-2 text-[20px] border border-transparent font-medium bg-amber-600 rounded-lg hover:scale-105 transition-transform hover:bg-transparent hover:border hover:border-amber-600 hover:text-amber-600 duration-200 cursor-pointer'
        onClick={()=>{
          
            setIndex(idx + 1);
            setUserData([])
          }
        }
        >Next</button>
      </div>

    </div>
  )
}

export default App
