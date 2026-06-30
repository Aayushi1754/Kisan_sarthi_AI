import React,{useState} from 'react'
import Footer from '../components/Footer'
import {Button, Input, Toast,Modal} from "../components/ui"

const Login = () => {
  const[open,setOpen]=useState(true)
  return (
    <div>
      <Modal
isOpen={open}
onClose={()=>setOpen(false)}
title="Welcome"
></Modal>
      <Toast 
        show={true}
        message="Login Sucessful"
        type="success"
        />
        <h1 className='font-bold text-3xl flex justify-center mt-4'> LOGIN</h1>
        <p className='text-center text-gray-600 mt-2'>
        Access personalized farming assistance with Kisan Sarthi AI.
        
      </p>
      <form  className='mt-6 flex flex-col gap-4 items-center bg-white
dark:bg-gray-800
dark:text-white ' >
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
        <Button
        variant="primary"
        size="md"
        onClick={() => alert("Login clicked")}> Login</Button>
        <p className='mt-4 text-sm text-gray-500 text-center'>
        Failed to Login? Create new Account!
      </p>

      </form>
      
      </div>
  )
}

export default Login