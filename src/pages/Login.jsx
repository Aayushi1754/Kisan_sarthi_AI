import React,{useState} from 'react'
import {useNavigate}from "react-router-dom"
import Footer from '../components/Footer'
import {Button, Input, Toast,Modal} from "../components/ui"

const Login = () => {
  const[open,setOpen]=useState(true)
  const navigate=useNavigate()
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.access_token);
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert(data.detail);
    }
  } catch (err) {
    console.log(err);
    alert("Server Error");
  }
};
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
      <form  
      onSubmit={handleLogin}
      className='mt-6 flex flex-col gap-4 items-center bg-white
dark:bg-gray-800
dark:text-white ' >
        <Input 
        label="Email"
        placeholder="Enter your email"
        type="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <Input
        label="password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button
        variant="primary"
        size="md"
        type="submit"
        > Login</Button>
        <Button
        variant="secondary"
        size="md"
        onClick={()=>{
          window.location.href="http://127.0.0.1:8000/auth/google";

        }} >
        Sign in with Google
        </Button>
        <p className='mt-4 text-sm text-gray-500 text-center'>
        Failed to Login? Create new Account!
      </p>

      </form>
      
      </div>
  )
}

export default Login