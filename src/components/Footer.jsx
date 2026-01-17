import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return; 

   
    console.log("Subscribed:", email);

    setEmail("");       
    setShowPopup(true); 
    

  };
  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000); // 4 sec (sweet spot)

    return () => clearTimeout(timer);
  }, [showPopup]);
  return (
    <footer className='relative mt-12 h-55 w-full border bg-[rgb(19,38,74)] text-white z-10'>
      {/* <div className='w-45 h-45 bg-[rgb(19,38,74)] rotate-45 absolute left-1/2 -translate-x-1/2 z-0 '></div> */}
      <div className='w-full h-full px-30 py-10 flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <div className='font-["Cinzel"]'>
            <h1 className='font-medium text-2xl'>luxury</h1>
            <p className='text-[0.6rem] tracking-[0.2rem] ml-5'>hotels</p>
          </div>
          <div className='text-[0.7rem]'>
            <h1>497 Evergreen Rd. Roseville, CA 95673</h1>
            <h1>+44 345 678 903</h1>
            <h1>luxury_hotels@gmail.com</h1>
          </div>
        </div>
        <div className='font-medium flex flex-col'>
          <Link to="/about">About Us </Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <div className='font-medium'>
          <div className='flex flex-row gap-2 items-center'>
            <div className='w-5 h-5'>
              <img className='' src='/fb-logo.png'></img>
            </div>
            <a href='https://facebook.com/abhishek.nakchwal' target='_blank'>Facebook</a>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <div className='w-5 h-5'>
              <img src='/x.png'></img>
            </div>
            <a href='https://x.com/abhishek.nakchwal' target='_blank'>Twitter</a>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <div className='w-5 h-5'>
              <img src='/instagram.png'></img>
            </div>
            <a href='https://instagram.com/abhishek.nakchwal' target='_blank'>Instagram</a>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[0.9rem] font-medium'>Subscribe to our newsletter</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <input type='email' value={email}onChange={(e) => setEmail(e.target.value)} required placeholder='Email Address' className='border-2 rounded-l border-[rgb(222,184,113)] px-4 py-[0.26rem]'></input>
              <button className='bg-[rgb(222,184,113)] cursor-pointer active:scale-95 text-[rgb(19,38,74)] px-3 rounded-r py-[0.36rem] font-medium'>OK</button>
            </form>
            {showPopup && (
        <div className="
          fixed top-6 left-1/2 -translate-x-1/2
          bg-black text-white px-6 py-3 rounded-lg
          animate-popup
        ">
          Thanks for subscribing ✨
        </div>
      )}
            
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer