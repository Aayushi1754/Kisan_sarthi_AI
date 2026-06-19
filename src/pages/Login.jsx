import React from 'react'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl flex justify-center mt-4'> LOGIN</h1>
        <p className='text-center text-gray-600 mt-2'>
        Access personalized farming assistance with Kisan Sarthi AI.
      </p>
      <form  className='mt-6 flex flex-col gap-4 items-center' >
        <input 
        type="email"
        placeholder="Enter your email"
        className='border p-2 rounded flex justify-center'
        />
        <input
        type="password"
        placeholder="Enter your password"
        className='border p-2 rounded flex justify-center'
        />
        <button className='  bg-black text-color-white text-sm mt-4 text-gray-400 rounded hover:bg-teal-700'>Login  </button>
        <p className='mt-4 text-sm text-gray-500 text-center'>
        Failed to Login? Create new Account!
      </p>

      </form>
      
      </div>
  )
}

export default Login