import React,{useState,useEffect} from 'react'
import { Navbar } from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import Democomponents from "./pages/Democomponents"

 const App = () => {
  const[dark,setDark]=useState(false);
  useEffect(()=>{
    const savedtheme=localStorage.getItem("theme")
    if(savedtheme=="dark")
    {
      setDark(true)
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem(
      "theme",dark?"dark":"light"
    )
  },[dark]
  );
  return (
    <div className={dark ? "dark":""}>
    <button className="border p-2 rounded m-4"onClick={()=>setDark(!dark)}
    > {dark ? "Light" : "Dark"}

</button>
    <div className='min-h-screen flex flex-col bg-white 
text-black 
dark:bg-gray-900 
dark:text-white'>
      <Navbar />
      <main className="grow">
      <Routes>
        <Route path='/' element= {<Home/>} />
            <Route path="/components" element={<Democomponents/>}
/>
        <Route path='/DashBoard' element={<Dashboard/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/About' element={<About/>}/>

      </Routes>
      </main>
      <Footer/>
    </div>
    </div>
  )
}
export default App