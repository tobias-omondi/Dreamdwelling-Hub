import React from 'react'
import Footer from './Footer'
import './About.css'
import Asset5 from './Asset/Copy clone website.jpeg'
import Asset6 from './Asset/Outdoor Products_ Cabinetry.jpeg'
import Asset7 from './Asset/Хрупкое равновесие (18+) - Промо фото.jpeg'

const About = () => {
  return (
    <div className='about_us'>
      <div className='about_us_title'>
        <p>How it Started</p>
      </div>
      <div className='about_stories'>

      <img src={Asset5} alt='ranch' />
  
    <p>In the year 2024, DwellingHub emerged as a beacon of innovation in the realm of real estate. <br/>
       Conceived by a dedicated group of visionaries, the platform was crafted with a singular focus:<br/>
       to simplify and elevate the real estate experience. DwellingHub is more than a digital marketplace;<br/>
       it's a community where seekers of homes and investment opportunities converge. <br/>
       With an unwavering commitment to transparency and user-friendly navigation, DwellingHub invites you <br/>
       to explore a world where finding your perfect dwelling is not just a transaction but a journey, <br/>
       guided by simplicity and enriched by a passion for redefining how we connect with real estate.<br/>
      Welcome to DwellingHub, where possibilities in the world of real estate unfold at your fingertips.</p>

      <img src={Asset6} alt='ranch' />
     </div>

     <div>
      <h1 className='sion'>Our vision .</h1>
     </div>

     <div className='our_vision'>
      
<p>At DwellingHub, our vision is to revolutionize the real estate experience with a focus on simplicity, <br/>
   transparency, and empowerment. We aspire to create a future where property transactions are seamlessly<br/>
   navigated, offering users a rich and informed journey. DwellingHub goes beyond a digital marketplace; <br/>
   it's a community and trusted companion guiding individuals through the exciting adventure of finding,<br/>
  buying, and selling real estate. Join us in making our vision your reality.</p>
  
   <img src={Asset7} alt='vision' />

     </div>
     
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
