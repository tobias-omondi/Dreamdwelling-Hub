import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav_home'>
            <Link to= '/' className='nav_live' style={{ textDecoration: 'none' }}>Home</Link>
        </div>
        <div className='nav_aboutus'>
          <Link to='/about' className='nav_live'  style={{ textDecoration: 'none' }}>About us</Link>
        </div>
        <div className='nav_comapanies'>
          <Link to='/companies' className='nav_live'  style={{ textDecoration: 'none' }}>Companies</Link>
        </div>
        <div className='nav_agents'>
          <Link to='/agent' className='nav_live'  style={{ textDecoration: 'none' }}>Agents</Link>
        </div>
        <div className='nav_login'>
        <button className='nav_live_btn'>
          <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
