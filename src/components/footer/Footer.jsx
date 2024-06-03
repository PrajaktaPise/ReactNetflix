import React from 'react'
import "./Footer.css"
import youtube from "../../assets/youtube_icon.png";
import twitter from "../../assets/twitter_icon.png";
import instagram from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift card</li>
        <li>Media Center</li>
        <li>Investor relation</li>
      <li>Jobs</li>
      <li>Terms Of Use</li>
      <li>Privacy</li>
      <li>Legal Notice</li>
      <li>Cookies Preferance</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
</ul>
<p className='copyright'>Ⓒ 1997-2023 Netflix,Inc</p>
    </div>
  )
}

export default Footer
