import React from "react";
import bg from "../assests/bg.png";
import eclispe1 from "../assests/Ellipse 1.png";
import eclipse2 from "../assests/Ellipse 2.png";

const Home = () => {
  return (
    <section className="bg-[#E5E5E5] px-4 py-36  relative">
  
  <img
        src={eclispe1}
        alt="Ellipse 1"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />
      <img
        src={eclipse2}
        alt="Ellipse 2"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />

        <div className="flex justify-center items-start min-h-screen">
          <div className="relative flex flex-col justify-center items-center max-w-screen-md w-full mx-auto">
            <img
              src={bg}
              alt="Your Alt Text"
              className="object-contain h-48 w-96 m-10 sm:h-64 sm:w-128"
            />
            <div className="py-5">
            <h1 className="font-bold text-3xl lg:text-center sm:text-left md:text-left">
              Simple pricing for your business
            </h1>
            <p className="mt-5 text-lg lg:text-center sm:text-left md:text-left">
              Plans that are carefully crafted to suit your business.
            </p>
            </div>
            <a href="/premium" className="mt-8">
              <button className="bg-[#50C2C9] px-8 py-2 text-white font-semibold text-xl">
                Get Started
              </button>
            </a>
          </div>
        </div>
   
    </section>
  );
};

export default Home;
