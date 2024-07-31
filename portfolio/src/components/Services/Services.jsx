import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
        </div> 
        <div  id='services' className='services-container'>
            <div className='services-format'>
            <h3>01</h3>
            <h2>Web Design</h2>
            <p>Web Designing is the process of building, intreactive...</p>
            <div className='services-readmore'>
                <p>Read More</p>
            </div>
            </div>
            <div className='services-format'>
            <h3>02</h3>
            <h2>Web Develop</h2>
            <p>Web development is the process of building, progamming...</p>
            <div className='services-readmore'>
                <p>Read More</p>
            </div>
            </div>
            <div className='services-format'>
            <h3>03</h3>
            <h2>UI Designing</h2>
            <p>UI Designing is Building interactive, responsive websites for a seamless user experience...</p>
            <div className='services-readmore'>
                <p>Read More</p>
            </div>
            </div>
         </div>    
    </div>
  )
}

export default Services;