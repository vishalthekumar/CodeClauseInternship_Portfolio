import React from 'react';
import './Footer.css';


function Footer(){
    return(
        <div id='footer' className='footer'>
         <div className='footer-top'>
            <div className='footer-top-left'>
                <h1>VISHAL KUMAR</h1>
                <p>I am a frontend developer</p>
            </div>
            <div className='footer-top-right'>
            
            </div>
            </div>
            <hr/>
            <div className='footer-bottom'>
           <p className='footer-bottom-left'> Designed  by @ Vishal Kumar</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
            </div>
        </div>
    )
}


export default Footer;