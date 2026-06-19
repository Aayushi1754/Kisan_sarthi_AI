import React from 'react'
// Home page
export const Hero = () => {
  return (
    <div className="relative">
        <img  className='h-[615px] w-full object-cover' src="https://c1.wallpaperflare.com/preview/884/928/958/home-outside-thailand-cornfield-rice.jpg"/>
        <div className='absolute inset-0 flex flex-col mt-12  mr-200 italic items-center'> 
            <h1 className='"text-white text-5xl font-bold' > Welcome!</h1>
             <p className="text-black text-2xl mt-4">
      From Soil to Harvest, Powered by Intelligence
    </p>
    <button className='bg-orange-300 text-3xl py-2 px-3 rounded-3xl mt-6'> Get Started</button>
        </div>
    </div>
  )
}
export default Hero
