import React from 'react'
import "./home.css"
import Aside from '../Aside/aside'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      
      <div className='left-side'>
        <Aside />
      </div>

      <div className='right-side'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer/>
      </div>

    </div>
  )
}

export default Home
