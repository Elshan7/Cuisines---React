import React from 'react'
import "./aside.css"

const Aside = () => {
  return (

<aside className='side-bar'>
            <div className="logo">
                <a href="">
                    <img src="https://preview.colorlib.com/theme/cuisines/images/logo.svg" alt="" />
                </a>
            </div>
            <div className="site-menu">
                <ul>
                    <li><a className='first' href="">ABOUT US</a></li>
                    <li><a href="">OUR MENU</a></li>
                    <li><a href="">SPECIAL OFFERS</a></li>
                    <li><a href="">GALLERY</a></li>
                    <li><a href="">CONTACT US</a></li>
                </ul>
            </div>
            <div className="contact">
                <span className='contact-span'>Book A Table</span>
                <a href="" className='number'>+91-8010200777</a>
                <span className='contact-span'>Mon - Sun, 8:00AM - 11:00PM</span>
            </div>
        </aside>
      
  )
}

export default Aside
