import React from 'react'
import Footer from './Footer'
import './About.css'
import Asset5 from './Asset/Copy clone website.jpeg'
import Asset6 from './Asset/Outdoor Products_ Cabinetry.jpeg'
import Asset7 from './Asset/Хрупкое равновесие (18+) - Промо фото.jpeg'
import Asset8 from './Asset/_Cheerful Black Afro Couple Kitchen__ by Stocksy Contributor _Ivan Gener_.jpeg'
import Asset9 from './Asset/How To Create The Perfect Moody Dark Academia Room.jpeg'

const About = () => {
  return (
    <div cla ssName='about_us'>
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
  
   <img src={Asset7} className='ranch1' alt='vision' />
     </div>

     <div>
     <h1 className='sion1'>Our Approach .</h1>
     </div>
     
     <div className='our_Approach'>
     <img src={Asset8} className='ranch2' alt='home' />

     <p>At DwellingHub, our approach is centered on providing a refreshingly straightforward and empowering <br/>
        real estate experience. We leverage cutting-edge technology to simplify the complexities of <br/>
        property transactions, ensuring a seamless journey for our users. Transparency is the cornerstone<br/>
        of our approach, as we believe in offering clear and comprehensive information to guide informed<br/>
        decision-making. Whether you're a first-time homebuyer or a seasoned investor, DwellingHub is designed<br/>
        to be user-friendly, supporting you at every step. Our commitment is not just to facilitate transactions<br/>
        but to foster a community where your real estate aspirations are met with clarity, confidence, and a touch<br/>
        of innovation.</p>
     </div>

     <div>
     <h1 className='sion2'>Our Process .</h1>
     </div>
     

     <div className='our_Process'>
     <p>At DwellingHub, our process is designed to make your real estate journey smooth and rewarding. <br/>
        We start by employing cutting-edge technology to simplify property transactions, ensuring<br/>
        efficiency and ease. From browsing listings to making informed decisions, our user-friendly <br/>
        platform guides you every step of the way. Transparency is key, as we provide clear and detailed <br/>
        information to empower your choices. Whether you're buying, selling, or investing, DwellingHub's<br/>
        process is crafted to be straightforward, supportive, and tailored to your unique needs. <br/>
        Trust us to turn your real estate goals into a seamless and satisfying experience.</p>

        <img src={Asset9} className='ranch3' alt='bed' />
     </div>
     <div>
      <h2>WHAT OUR CLIENTS SAY.</h2>
     </div>
     <div>
      <h2>Meet with our Expert to reach site Top Ranking</h2>
     </div>
     
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
