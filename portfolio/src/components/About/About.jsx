import React from 'react';
import './About.css';

function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
    
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                </div> 
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am currently pursuing an Internship in web development, focusing on enhancing my skills in HTML, CSS, Javascript, and Reactjs, MySql and Nodejs.</p>
                    <p>I am Passionate about creating intreactive and responsive web site.</p>
                </div>
                <div className='about-skills'><h1>SKILLS</h1>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className='about-skill'><p>JAVASCRIPT</p><hr style={{width:"60%"}}/></div>
                    <div className='about-skill'><p>BOOTSTRAP</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className='about-skill'><p>REACT JS</p><hr style={{width:"55%"}}/>
                    </div>
                    <div className='about-skill'><p>NODE JS</p><hr style={{width:"30%"}}/>
                    </div>
                    <div className='about-skill'><p>MYSQL</p><hr style={{width:"40%"}}/>
                    </div>
                </div>
                </div> 
    </div>
  )
}

export default About;