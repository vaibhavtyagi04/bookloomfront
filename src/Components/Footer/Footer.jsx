import React from 'react'
import './Footer.css'

import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <div  className="logo">
          <p>B</p>
        </div>
        <p>Book Loom</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <a href='https://www.instagram.com/jst.vbhv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
