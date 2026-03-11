import React, { useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState(0);

    const  Photogallery = async () => {
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
    let data = await res.json();
    setUserData(data)
    console.log(data)
  
  }

  return (
    <div className="bg-black h-screen">
      <button onClick={Photogallery} className='text-white text-4xl font-semibold'>hi</button>
    </div>
  )
}

export default App
