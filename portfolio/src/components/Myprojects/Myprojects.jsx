import React from 'react'
import './Myprojects.css';
import bank from '../../assests/banking1.jpg'
import exams from '../../assests/exam.jpg'
import word from '../../assests/wordpress.jpg'

function Myprojects(){
  
  return (
    <div id='myprojects' className='myprojects'>
    <div className='projects-head'>
    <h1>My Projects</h1>
    </div>
    <div class="grid">
     
          <div class="item1">
          <img  className='grid-image'  src={bank} alt='Banking Website'/>
          <p>Banking website using
            <br/> Html,Css,Bootstrap</p>
          </div>
          

          <div class="item2">
          <img  className='grid-image' src={exams}/>
          <p>Online Exam Portal using Html,Css,Javascript,Bootstrap.</p>
          </div>
          <div class="item3">
          <img className='grid-image' src={word}/>
          <p> Software website using<br/> Wordpress</p>
          </div>
                                            
    </div>
    </div>
  )
}

export default Myprojects;