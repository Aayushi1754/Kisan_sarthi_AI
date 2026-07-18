
import React from 'react'
import {Link,useNavigate} from "react-router-dom"
// every page
export const Navbar = () => {
  const navigate = useNavigate();
  const token=localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
        <nav className="bg-black text-white p-6 dark:bg-gray-800 dark:text-white">
            <h1 className="flex mb-5 justify-center text-2xl font-bold align-middle "> Kisan Sarthi</h1>
            <div className='flex justify-center gap-6 underline text-2lg font-bold'>
              <Link to='/'> Home</Link>
              <Link to='/About'> About</Link>
              {
                !token?(
                  <Link to='/login'> Login</Link>
                ):(
                  <button onClick={handleLogout}>Logout</button>
                )
              }
              <Link to='/Dashboard'> Dashboard</Link>
              <Link to="/AIChat"> AI Chat</Link>
            </div>
        </nav>
    </div>
  )
}
export default Navbar