import React from 'react';
import './Contact.css';
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import{faPhoneVolume,faMapMarkerAlt,faEnvelope}from '@fortawesome/free-solid-svg-icons'

function Contact()  {
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'> 
        <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>
                I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on, You can contact anytime.
            </p>
            <div className='contact-details'>
              <div className='contact-detail'>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>vishalthekumar99@gmail.com</p>
            </div>
            <div className='contact-detail'>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <p>8393809915</p>
            </div>
            <div className='contact-detail'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>Dehradun,India</p>
            </div>  
            </div>
        </div>
        <form  action='https://formspree.io/f/mpwapned'  className='contact-right' method="POST">
          <label htmlFor="">Your Name</label>
          <input type='text'  name='username' placeholder='Enter your name' autoComplete='off' required />
          <label htmlFor="">Your Email</label>
          <input type='email' name='Email' placeholder='Enter your Email'
          autoComplete='off' required />
           <label htmlFor="">Write your message here</label>
           <textarea name='message' cols="30" rows="6"  placeholder='Enter your message' autoComplete='off' required />
           <button type='submit' className='btn btn-success'>Submit now</button>
        </form>
        </div>
    </div>
  )
}

export default Contact;