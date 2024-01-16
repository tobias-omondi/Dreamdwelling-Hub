import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav_home'>
            <Link to= '/'>Home</Link>
        </div>
        <div className='nav_aboutus'>
          <Link to='About us'>About us</Link>
        </div>
        <div className='nav_comapanies'>
          <Link to='Companies'></Link>
        </div>
        <div className='nav_agents'>
          <Link to='Agents'>Agents</Link>
        </div>
        <div className='nav_login'>
          <Link to='Login'></Link>
        </div>
      
    </nav>
  )
}

export default Navbar
