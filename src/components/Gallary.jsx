import React from 'react'

const Gallary = ({src}) => {
  return (
    <div className="flex justify-center mb-10">
        <div className="rounded-2xl w-[70%] h-2/3  mt-10 flex flex-col gap-10 shadow-2xl transition-transform duration-300 ease-out hover:scale-105">
        <img src={src} className="w-full h-full rounded-2xl object-cover "></img>
      </div>
      </div>
  )
}

export default Gallary