import React from 'react'
import "./Section1.css"

const Section1 = () => {
  return (
    <section className='sct1'>
        <div className="img1">
            <img src="https://preview.colorlib.com/theme/cuisines/images/hero_1.jpg.webp" alt="" />
            
        </div>

        <div className="sct1-text">
                <div className="text-up">
                    <h2>You don't need a silver fork to eat good food.</h2>
                </div>
                <div className="sct1-buttons">
                    <button className='btn1'>See Our Menu</button>
                    <button className='btn2'>Special Offers</button>
                </div>
            </div>

        <div className="main"></div>
      
    </section>
  )
}

export default Section1
