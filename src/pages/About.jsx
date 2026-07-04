import React from 'react'
import Footer from '../components/Footer'
export const About = () => {
  return (
    <div className="bg-gradient-to-r from-orange-200 via-green-300 to-yellow-200 dark:from-gray-800 dark:to-gray-900 min-h-screen p-8">
    <h2 className='flex font-bold text-5xl  py-3 ml-20 mr-100 '> About Kisan Sarthi AI
      <span role="img" aria-label="sprout">🌱</span>
    </h2>
    <div className=" mt-8 ml-30 flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-16">
    <p className='w-full md:w-[60%] text-xl leading-relaxed text-gray-700 bg-green-100 p-6 rounded-xl italic shadow-sm'>
    <p> Kisan Sarthi AI is an intelligent web application designed to assist
  farmers and field supervisors by providing quick and reliable answers
  to agriculture-related questions. The platform aims to simplify access
  to farming knowledge and support better decision-making in day-to-day
  agricultural activities. </p>
  <p className="mt-4">
  Powered by Google's Gemini API, Kisan Sarthi AI leverages the power of
  Large Language Models (LLMs) to deliver real-time guidance on crop
  diseases, pest attacks, soil health, and general farming practices.
  The chatbot is specifically tuned for Uttarakhand's mountain farming
  conditions, making its suggestions more relevant, local, and practical.
  </p>
  </p>
  <div className=" mr-20 md:w-[40%] w-full flex justify-end">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkA-gTl_u2j5bU4OJOlkmoz4VTV1qNVePzurpRX4w-LEszCqcssipdwatI&s=10" 
          alt="Descriptive text" 
          className="  w-full  h-auto rounded-lg shadow-lg max-h-[300px] "
        />
      </div>
    </div>
    <h2 className=' mt-30  ml-20 mb-10 flex font-bold text-5xl  py-3 ml-7 mr-100 mt-3'> Our Mission
      <span role="img" aria-label="leaf"></span>
    </h2>
    <div className=" mt-3 flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-16"> 
      <img src="https://media.istockphoto.com/id/1135253768/photo/hand-holding-small-tree-for-planting-concept-green-world.jpg?s=612x612&w=0&k=20&c=VFzKG9fDT4vB0OEfW9UPt9qWLWEuyjdXvOqC3fzR9hU=" alt="Our Mission" 
      className="md:w-[30%] w-1/2 h-auto rounded-lg shadow-lg max-h-[800px] ml-20" />
    <p className=' mr-30 w-full md:w-[60%] text-xl leading-relaxed text-gray-700 bg-yellow-100 p-6 rounded-xl italic shadow-sm'>
      Agriculture is the backbone of our communities, yet farmers increasingly face volatile weather, unpredictable pest cycles, and shifting soil health—challenges that are amplified in mountain terrains like Uttarakhand.Kisan Sarthi AI acts as a digital companion. By training Large Language Models (LLMs) on regional data and leveraging the real-time processing power of Google's Gemini API, we don't just provide generic farming advice. We deliver precise, practical solutions tailored to the exact topography, soil qualities, and localized challenges of our farmers, ensuring no field is left behind in the digital age.
    Our mission is to empower farmers with accessible, accurate, and timely information that can enhance their productivity and sustainability. By integrating advanced AI technologies into the agricultural sector, we aim to bridge the knowledge gap and support farmers in making informed decisions that lead to better yields and improved livelihoods.
    </p>
    </div>
   
 
    </div>
  )
}
export default About