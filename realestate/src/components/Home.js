import React from 'react'
import Footer from './Footer'
import './Home.css'
import Asset4 from './Asset/_ (1).jpeg'
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div className='house_ge'>
      <img src={Asset4} alt='house' style={{width: '100%', height : '130vh'}}/>
      <h2>FIND A HOME <br/> THAT SUITS YOU.</h2>
      <p>Want a Home for your family ?  We will help you get a <br/>house and with good quality
      that suits you <br/> and your Family.</p>

      <button className='btn'>
          <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Get Started.</Link>
      </button>
      <div className='show_case1'>
        <h1> <span style={{color : 'Blue'}}>+</span> 1200 </h1>
        <h4>Listed Properties</h4>
      </div>

      <div className='show_case2'>
        <h1> <span style={{color : 'Blue'}}>+ </span> 4500 </h1>
        <h4>Happy Customers</h4>
      </div>

      <div className='show_case3'>
        <h1> <span style={{color : 'Blue'}}>+</span> 100 </h1>
        <h4>Awards</h4>
      </div>
      <div className='search'>
        <p> Search for available Properties</p>

        <button type='button' className='properties_search_button'>Search Properties .</button><br/>
        <button type='button' className='location_search_button'>Search Location .</button><br/>
        <button type='button' className='budget_search_button'>Search by Budget .</button>
      </div>

      {/* <div className='ser_tag'>
        <h1>Search</h1>
        <input type='text' placeholder='Search'/>
      </div> */}

      <div> 
        <Footer />
      </div>
    </div>
  )
}

export default Home
