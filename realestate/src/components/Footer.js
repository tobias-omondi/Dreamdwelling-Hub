import React from 'react'
import Asset from './Asset/Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpeg'
import './Footer.css'
import { Link } from "react-router-dom";
import Asset1 from  './Asset/6 Ways to Grow Your Facebook Page Audience.jpeg'
import Asset2 from './Asset/Cuisenaire Rods in the Classroom.jpeg'
import Asset3 from './Asset/Elon Musk.jpeg'




const Footer = () => {

    const faceBookUrl = 'https://www.facebook.com'
    const instaGram = 'https://www.instagram.com/'
    const twitter = 'https://twitter.com/'


  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={Asset} alt='house logo' />
            <h3>PROPERTY Pulse</h3>
            <p>Discover unparalleled comfort and style in our exquisite houses,<br/>
            where modern amenities seamlessly blend with timeless design,<br/> 
            creating the perfect sanctuary for your lifestyle.<br/> 
            Elevate your living experience with our thoughtfully crafted homes<br/>
            that redefine luxury and sophistication</p>
        </div>
        <div className='footer_services'>
            <h4>servives</h4>
            <Link to= 'Houses for Rent'>Houses for Rent</Link>
            <Link to= 'Houses for Sale'>Houses for Sale</Link>
            <Link to= 'Rent to own'>Rent to own</Link>
        </div>
        <div className='footer_Contact'>
            <h4>Connect with us</h4>
            <Link to= 'Houses for Rent'>Home</Link>
            <Link to= 'Houses for Sale'>Properties</Link>
            <Link to= 'Rent to own'>About us</Link>
        </div>
        <div className='footer_page'>
            <h4>Follow US</h4>
            <a href={faceBookUrl} target = "blank" alt = 'facebook'>
                <img src= {Asset1} alt='fb'/> </a>

            <a href={instaGram} target = "blank" alt = 'ig'>
                <img src= {Asset2} alt='gram'/> </a>

            <a href={twitter} target = "blank" alt = 'x'>
                <img src= {Asset3} alt='twit'/> </a>
            
        </div>
    </div>
  )
}

export default Footer
