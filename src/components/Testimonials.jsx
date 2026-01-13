import React, { useState } from 'react'

const Testimonials = () => {
    
    const testimonials = [
  {
    quote: "Calm, serene, and beautifully retro — a perfect place to unwind.",
    author: "Mr. and Mrs. Baxter, United Kingdom"
  },
  {
    quote: "Peaceful, elegant, and perfectly located — a true escape.",
    author: "Mr. and Mrs. Thompson, Canada"
  },
  {
    quote: "Warm hospitality with a touch of old-world charm.",
    author: "Ava Rodriguez, Spain"
  },
  {
    quote: "Every corner felt calm, stylish, and thoughtfully designed.",
    author: "Daniel Müller, Germany"
  },
  {
    quote: "A beautiful place to slow down and breathe again.",
    author: "Sophie Laurent, France"
  },
  {
    quote: "Quiet mornings, cozy rooms, and a relaxing atmosphere.",
    author: "Arjun Mehta, India"
  },
  {
    quote: "The perfect blend of comfort and character.",
    author: "Emily Parker, USA"
  },
  {
    quote: "A charming retreat that makes you forget the rush of life.",
    author: "Luca Romano, Italy"
  }
];
const [index, setIndex] = useState(0);
const current = testimonials[index];


  return (
    <div className='flex mt-5 h-fit flex-col items-center gap-4'>
        <h1 className='font-bold text-4xl font-[Times_new_roman]'>Testimonials</h1>
        <div className=''>
            <h1 className='text-xl font-medium'>"{current.quote}"</h1>
            <p className='flex justify-center items-center'>{current.author}</p>
        </div>
        <div className='flex flex-row gap-5'>
            <button className='w-fit h-fit px-4 py-2 font-bold bg-[rgb(222,184,113)] rounded-lg cursor-pointer active:scale-95'
            onClick={()=>{
                setIndex((prev) => (prev + 1) % testimonials.length);

            }}><img className='w-full h-full' src='/next-btn.png'></img></button>
            <button className='w-fit h-fit px-4 py-2 font-bold bg-[rgb(222,184,113)] rounded-lg cursor-pointer active:scale-95'
            onClick={()=>{
                setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                
            }}><img className='w-full h-full rotate-180' src='/next-btn.png'></img></button>
        </div>
    </div>
  )
}

export default Testimonials