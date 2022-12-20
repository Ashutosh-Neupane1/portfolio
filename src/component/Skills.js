import React from 'react';
import "../styles/skills.css"

const Skills = () => {
  return (
    <div className="skills">
    <div className="skills-header">
      <h1>My Skills</h1>
      <p>A list of the skills and technologies that I am proficient in</p>
    </div>
    <div className="skills-content">
      <div className="skill">
        <h2>Web Development</h2>
        <p>I have experience building web applications using a variety of technologies, including HTML, CSS, JavaScript, React, and Node.js.</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="skill">
        <h2>Mobile Development</h2>
        <p>I have experience building mobile applications for Android and iOS using technologies such as React Native and Swift.</p>
        <ul>
          <li>React Native</li>
          <li>Swift</li>
          <li>Java</li>
          <li>Kotlin</li>
        </ul>
      </div>
      <div className="skill">
        <h2>Backend Development</h2>
        <p>I have experience building backend systems and APIs using technologies such as Node.js and Python.</p>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
      </div>
      <div className="skill">
        <h2>Database Management</h2>
        <p>I have experience working with databases and can work with a variety of database technologies, including MySQL, MongoDB, and Firebase.</p>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Skills;
