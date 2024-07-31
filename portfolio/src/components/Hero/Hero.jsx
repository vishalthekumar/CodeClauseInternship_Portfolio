import React from 'react';
import './Hero.css';
import profile from '../../assests/p.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} />
        <h1><span>I'm Vishal Kumar</span> Frontend Developer</h1>
        <p>Passionate about building user-friendly web designes and experiences an learing new technologies.</p>
        <div className='hero-action'>
            <div className='hero-connect'> <Link to="contact">Hire Me</Link></div>
            {/* <div className='hero-resume'>My Resume</div> */}
        </div>
    </div>
  )
}

export default Hero;