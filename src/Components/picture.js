import React,{useState} from 'react'

export default function Picture( {imageName, index, remooveImage} ) {


  const [closeButtonEnter,setClosebuttonEnter]= useState(-1)
  return (
    <div className='relative' key={index}

    onMouseEnter={() => setClosebuttonEnter(index) } 
    onMouseLeave={() => setClosebuttonEnter(-1) }
    >
      <button className={`bg-white w-5 h-5 pb-2 font-thin rounded-xl text-center flex justify-center items-center absolute text-red-500 right-0 text-sm focus:outline-none ${index === closeButtonEnter? '': 'hidden' }`}
       onClick={() => remooveImage(index)}  
       >X</button>
    <img src={imageName} className="w-40 mx-auto" alt=""></img>
  </div>
    
  )
}
