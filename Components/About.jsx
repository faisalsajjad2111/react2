import React from 'react';
import aboutimage from '../images/about.png';
const About = () => {
  return (
    <div id='about'>
      <div className='about-image'>
      <img src={aboutimage} alt=''/>

        </div>  
    <div className='about-text'>
    <h1>LEARN MORE ABOUT US</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

    <button>READ MORE</button>

        </div>  
    </div>
  )
}

export default About
