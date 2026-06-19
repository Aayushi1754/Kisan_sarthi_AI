
import React from 'react'
import { About } from '../pages/About'
import {Link} from 'react-router-dom'
// every page
export const Navbar = () => {
  return (
    <div>
        <nav className="bg-black text-white p-6">
            <h1 className="flex mb-5 justify-center text-2xl font-bold align-middle "> Kisan Sarthi</h1>
            <div className='flex justify-center gap-6 underline text-2lg font-bold'>
              <Link to='/'> Home</Link>
              <Link to='/About'> About</Link>
              <Link to='/Login'> Login</Link>
              <Link to='/Dashboard'> Dashboard</Link>
            </div>
        </nav>
    </div>
  )
}
export default Navbar