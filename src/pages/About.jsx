import React from 'react'
import Footer from '../components/Footer'
export const About = () => {
  return (
    <div >
    <h2 className='flex font-bold text-5xl  py-3 ml-100 mr-100 mt-3 bg-gray-400'> What is Kisan Sarthi AI?</h2>
    <p className='text-2xl  py-4 flex bg-gray-300 mt-4 '> Kisan Sarthi AI is an intelligent web application designed to assist
  farmers and field supervisors by providing quick and reliable answers
  to agriculture-related questions. The platform aims to simplify access
  to farming knowledge and support better decision-making in day-to-day
  agricultural activities.</p>
  <p className='text-2xl  flex justify-center bg-gray-300  '>Powered by Google's Gemini API, Kisan Sarthi AI leverages the power of
  Large Language Models (LLMs) to deliver real-time guidance on crop
  diseases, pest attacks, soil health, and general farming practices.
  The chatbot is specifically tuned for Uttarakhand's mountain farming
  conditions, making its suggestions more relevant, local, and practical.
  </p>
 
 
    </div>
  )
}
export default About