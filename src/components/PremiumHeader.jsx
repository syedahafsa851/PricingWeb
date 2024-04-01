import React from 'react';
import bgg from "../assests/bg1.png";
import eclispe1 from "../assests/eclipse 3.png";
import eclipse2 from "../assests/eclipse 4.png";
const PremiumHeader = () => {
  return (
    <section className="bg-[#50C2C9] py-10 sm:px-10 sm:py-20 relative">
         <img
        src={eclispe1}
        alt="Ellipse 1"
        className="absolute top-0 left-0 "
      />
      <img
        src={eclipse2}
        alt="Ellipse 2"
        className="absolute top-0 left-0  "
      />

      <div className="container mx-auto pb-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col justify-center items-center mt-20 mb-5 sm:flex-row sm:items-center">
          <img
            src={bgg}
            className="object-contain h-48 w-full sm:w-auto m-2 sm:ml-20"
            alt="premium"
          />
            </div>
          <div className="text-center">
            <h1 className="font-bold text-3xl text-white">Premium PRO</h1>
            <h1 className="font-bold text-3xl text-white">$329</h1>
            <p className="text-xl font-medium text-white">billed just once</p>
          </div>
        </div>
    
      </section>
  )
}

export default PremiumHeader;
