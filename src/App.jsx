import React from 'react'
import { Navbar } from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import Democomponents from "./pages/Democomponents"

export const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
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
  )
}
export default App