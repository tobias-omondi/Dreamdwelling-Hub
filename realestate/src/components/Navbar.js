import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav_home'>
            <Link to= '/'>Home</Link>
        </div>
        <div className='nav_aboutus'>
          <Link to='/about'>About us</Link>
        </div>
        <div className='nav_comapanies'>
          <Link to='/companies'></Link>
        </div>
        <div className='nav_agents'>
          <Link to='/agents'>Agents</Link>
        </div>
        <div className='nav_login'>
          <Link to='/login'>Login</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
