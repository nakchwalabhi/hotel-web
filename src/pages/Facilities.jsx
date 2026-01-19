import React, { useState } from "react";
import Gallary from "../components/Gallary";
const imgData = [
  {id:1, src:"/gym.png"}, 
  {id:2, src:"/spa.png"}, 
  {id:3, src:"/pool.png"}, 
  {id:4, src:"/spool.png"}, 
  {id:5, src:"/rest.png"}, 
  {id:6, src:"/laundary.png"},

];


const Facilities = () => {
  return (
    <div className="px-15 py-10">
      <div className="px-10 py-5 flex items-center flex-col gap-5 text-[rgb(19,38,74)]">
        <h1 className='font-["Cinzel"] font-bold text-4xl upercase'>Facilities</h1>
        <p className="text-center text-xl">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
      </div>
      {imgData.map((item)=>(
        <Gallary
        key={item.id}
        src={item.src}/>
      ))}
      
    </div>
  );
};

export default Facilities;
