import React from 'react';
import Carosel from "./Carosel"
import "../styles/about.css"


const About = () => {
  return (
    <div className="about" id='about'>
    <div className="about-header">
  <h1>About Me</h1>
      <p>A little bit about who I am and what I do</p>
     <Carosel/>
      
    </div>
    <div className="about-content">
      <h2 className='image-side'>Who I am</h2>
      
      <p>I am a software developer with a passion for building web and mobile applications. I have experience in a variety of programming languages and technologies, including JavaScript, React, Node.js, and Python.</p>
      <h2>What I do</h2>
      <p>In my current role, I work on building and maintaining web and mobile applications for a variety of clients.
        </p>
        </div>
        </div>
  );
};

export default About;
