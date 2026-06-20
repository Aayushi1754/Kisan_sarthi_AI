import React from 'react'

export const Hero = () => {
  return (
    <div className="relative w-full">

      <img  
        className="h-[615px] w-full object-cover"
        src="https://c1.wallpaperflare.com/preview/884/928/958/home-outside-thailand-cornfield-rice.jpg"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 italic">

        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Welcome!
        </h1>

        <p className="text-black text-lg md:text-2xl mt-4">
          From Soil to Harvest, Powered by Intelligence
        </p>

        <button className="bg-orange-300 text-xl md:text-3xl py-2 px-5 rounded-3xl mt-6">
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Hero