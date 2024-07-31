import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Myprojects from './components/Myprojects/Myprojects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'




const App = () => {
  return (
    <div className=''>
<Navbar/>
<Hero/>
<About/>
<Services/>
<Myprojects/>
<Contact/>
<Footer/>

    </div>
  )
};

export default App;