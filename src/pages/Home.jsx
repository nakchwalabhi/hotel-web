import React from "react";
import Section from "../components/Section";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  const homeData = [
    {
      title: "Luxury redefined",
      description:
        "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
      img: "/home-room.png",
    },
    {
      title: "Leave your worries in the sand",
      description:
        "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind.",
      img: "/home-beach.png",
    },
  ];
  const section1 = homeData.map((elem, idx) => {
    return (
      <div key={idx} className=" w-full h-80  mt-15 flex flex-row">
        <div className=" w-1/2 py-5 px-15 flex justify-center ">
          <div className="flex flex-col gap-3 h-fit px-10 border-l-2 mt-8">
            <h1 className="font-bold text-4xl tracking-wide font-[Times_New_Roman] text-[rgb(19,38,74)]">
              {elem.title}
            </h1>
            <p className="text-[1.2rem] font-sans">{elem.description}</p>
            <button className=" bg-[rgb(222,184,113)] rounded-lg  text-white font-bold uppercase py-2.5 w-fit px-11 hover:scale-105 active:scale-95 transition">
              Explore
            </button>
          </div>
        </div>
        <div className="w-1/2 object-cover relative">
          <img src={elem.img} className="w-full h-full absolute rounded-2xl shadow-2xl transition-transform duration-300 ease-out hover:scale-105"></img>
          {/* <img src="/hotel-cover.png" className="w-full h-full absolute rounded-2xl shadow-2xl hover:scale-95"></img> */}
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-5 text-[rgb(19,38,74)]">
      <div className="h-fit w-full py-10 px-24 pl-0 mt-5">
        <h1 className="flex justify-center text-2xl font">
          All our room types are including complementary breakfast
        </h1>
        {section1}
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
