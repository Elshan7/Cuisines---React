import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer>

            <div className="footer-container">
                <div className="container-up">
                    <div className="part1">
                        <h3 className='part1-h3'>About us</h3>
                        <p className='part1-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium rem accusantium magni est</p>
                        <a className='part1-a' href="">Read more</a>
                    </div>

                    <div className="part2">
                        <h3 className='part2-h3'>Links</h3>
                        <ul className='part2-ul'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Our Menu</a></li>
                            <li><a href="">Special Offers</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div className="part3">
                        <h3 className='part3-h3'>OUR MENU</h3>
                        <ul className='part3-ul'>
                            <li><a href="">Breakfast</a></li>
                            <li><a href="">Brunch</a></li>
                            <li><a href="">Dinner</a></li>
                            <li><a href="">Drinks</a></li>
                        </ul>
                    </div>
                    <div className="part4">
                        <h3 className='part4-h3'>Opening Hours</h3>
                        <p className='first'>
                            <span className='d-block'>Monday - Friday</span>
                            <span>8:00 am — 5:00pm</span>
                        </p>
                        <p className='second'>
                            <span className='d-block'>Sunday</span>
                            <span>8:00 am — 8:00pm</span>
                        </p>
                    </div>
                </div>
                <div className="container-down">
                    <p className='last'>
                    Copyright ©2024 All rights reserved | This template is made with ❤️  by <span className='last-span'>Colorlib </span> </p>
                </div>

            </div>

        </footer>

    )
}

export default Footer
