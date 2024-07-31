import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {

  
  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>Services</Link>
        </li>
        <li>
          <Link to="myprojects" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
        
      </ul>
      <div className='nav-connect'><Link to="contact">Connect With Me</Link></div>
    </div>




  );
};

export default Navbar;