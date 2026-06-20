import React from 'react'
import Footer from '../components/Footer'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

const Login = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl flex justify-center mt-4'> LOGIN</h1>
        <p className='text-center text-gray-600 mt-2'>
        Access personalized farming assistance with Kisan Sarthi AI.
      </p>
      <form  className='mt-6 flex flex-col gap-4 items-center ' >
        <Input 
        label="Email"
        placeholder="Enter your email"
        type="Email"
        />
        <Input
        label="password"
        placeholder="Enter your password"
        type="password"
        />
        <button
        variant="primary"
        size="md"
        onClick={() => alert("Login clicked")}> Login</button>
        <p className='mt-4 text-sm text-gray-500 text-center'>
        Failed to Login? Create new Account!
      </p>

      </form>
      
      </div>
  )
}

export default Login