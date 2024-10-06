import React from 'react'
import "./Section3.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';




const Section3 = () => {
    return (
        <section className='sct3'>
            <div className="sct3-container">

                <div className="about-text">
                    <span className='subheading'>About Us</span>
                    <h3 className='heading'>About Cuisines</h3>
                    <p className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quisquam ut, quis laborum tenetur odit dolor quos minus in,
                        ducimus quaerat repellendus laudantium rem accusantium magni est.
                        Error atque beatae et quisquam facilis exercitationem vero tempore quos aperiam,
                        nostrum ducimus, pariatur.</p>
                    <ul className='sct3-ul'>
                        <li className='sct3-li'><a className='a-text' href="">✅ Quisquam facilis exercitationem vero</a></li>
                        <li className='sct3-li'><a className='a-text' href="">✅ Aaperiam nostrum ducimus</a></li>
                        <li className='sct3-li'><a className='a-text' href="">✅ Lorem ipsum dolor sit amet</a></li>
                        <li className='sct3-li'><a className='a-text' href="">✅ laudantium rem accusantium magni est</a></li>
                    </ul>

                    <div className="sct3-btn">
                        <a className='sub-btn' href="">See Our Menu</a>
                    </div>
                </div>

                <div className="sct3-carousel">

                    <Carousel>
                        <Carousel.Item>
                           <img className='carousel-img' src="https://preview.colorlib.com/theme/cuisines/images/hero_2.jpg.webp" alt="" />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel-img' src="https://preview.colorlib.com/theme/cuisines/images/hero_1.jpg.webp" alt="" />
                            <Carousel.Caption>
                               
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

                <div className="cover"></div>
            </div>



        </section>
    )
}

export default Section3
