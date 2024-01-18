import React from 'react'
import Footer from './Footer'
import './Home.css'
import Asset4 from './Asset/_ (1).jpeg'

const Home = () => {
  return (
    <div className='house_ge'>
      <img src={Asset4} alt='house' style={{width: '100%', height : '130vh'}}/>
      <h2>FIND A HOME <br/> THAT SUITS YOU.</h2>
      <p>Want a Home for your family ? <br/> We will help you get a house and with good quality
      that suits you <br/> and your Family.</p>
      <div> 
        <Footer />
      </div>
    </div>
  )
}

export default Home
