import React from "react";
import Navbar from "./Navbar";

const Section = ({ bg }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="hotel"
      />
      <img
        src='/bg-img.png'
        className="absolute inset-0 w-full h-full object-cover"
        alt="hotel"
      />
      <div className="absolute inset-0"></div>
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center px-32">
          <div className="max-w-xl">
            <h4 className="text-white text-2xl tracking-widest mb-2">
              WELCOME TO
            </h4>

            <h1 className="font-[Times_New_Roman] text-white text-8xl font-bold leading-none">
              LUXURY
            </h1>

            <h2 className="font-[Times_New_Roman] text-white text-3xl tracking-[0.5em] mt-2">
              HOTELS
            </h2>

            <p className="text-white/90  text-lg">
              Book your stay and enjoy Luxury
            </p>
            <p className="text-white/90">
              redefined at the most affordable rates.
            </p>

            <button className="mt-10 bg-[rgb(222,184,113)] px-8 py-4 rounded-lg flex items-center justify-center gap-3 text-white font-bold tracking-widest hover:scale-105 active:scale-95 transition">
              <img src="/h-icon.png" className="w-5 h-5" />
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
