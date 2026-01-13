import React from 'react'
import Section from '../components/Section'


const Home = () => {
  return (
    <div className='h-screen w-full py-10 px-24 pl-0 mt-5'>
        <h1 className='flex justify-center text-2xl font'>All our room types are including complementary breakfast</h1>
        <div className=' w-full h-[75%]  mt-5 flex flex-row'>
            <div className=' w-1/2 py-5 px-15 flex justify-center '>
            <div className='flex flex-col gap-3 h-fit px-10 border-l-2 mt-13 '>
                <h1 className='font-bold text-4xl tracking-wide font-[Times_New_Roman] text-[rgb(19,38,74)]'>Luxury redefined</h1>
                <p className='text-[1.2rem] font-sans'>Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.</p>
                <button className=' bg-[rgb(222,184,113)] rounded-lg  text-white font-bold uppercase py-2.5 w-fit px-11 hover:scale-105 active:scale-95 transition'>Explore</button>
            </div>
            </div>
            <div className='w-1/2 object-cover relative'>
                <img src='/home-room.png' className='w-full h-full absolute'></img>
                <img src='/hotel-cover.png' className='w-full h-full absolute'></img>
                
            </div>
        </div>
    </div>
  )
}

export default Home