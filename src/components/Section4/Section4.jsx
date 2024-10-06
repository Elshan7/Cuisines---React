import React from 'react'
import "./Section4.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


const Section4 = () => {
    return (
        <section className='sct4'>

            <div className="sct4-conatiner">
                <div className="sct4-text">
                    <p className='sct4-p'>Testimonials</p>
                    <h2 className='sct4-h2'>Happy Customers</h2>
                </div>

                <div className="sct4-carousel">

                    <Carousel >
                        <Carousel.Item >
                            <img className='sct4-img' src="https://preview.colorlib.com/theme/cuisines/images/person_sq_1.jpg.webp" alt="" />
                            <Carousel.Caption>
                                <p className='sct4-lorem'>“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium rem accusantium magni est.”</p>
                                <div className="author">
                               <span>Sheena Smith</span>
                               <span>Customer</span>
                               </div>

                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className='sct4-img' src="https://preview.colorlib.com/theme/cuisines/images/person_sq_2.jpg.webp" alt="" />
                            <Carousel.Caption>
                                <p className='sct4-lorem'>“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium rem accusantium magni est.”</p>
                               <div className="author">
                               <span>Ben Miller</span>
                               <span>Customer</span>
                               </div>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                          <img className='sct4-img' src="https://preview.colorlib.com/theme/cuisines/images/person_sq_1.jpg.webp" alt="" />
                            <Carousel.Caption>
                                <p className='sct4-lorem'>“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium rem accusantium magni est.”</p>
                                <div className="author">
                               <span>Sheena Smith</span>
                               <span>Customer</span>
                               </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

            </div>


        </section>
    )
}

export default Section4
