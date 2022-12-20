import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Layout = (props) => {
  return (
    <Router>

    
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><Link to="#about" smooth>About</Link></li>
            <li><Link to="#skills" smooth>Skills</Link></li>
            <li><Link to='#project' smooth>Project</Link></li>
            <li><Link to='#contact' smooth>Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <About/>
        <Skills/>
        <Projects/>
       
        <Contact/>
      </main>
      <footer>
      <div className="Contact-social">
        <a href="/linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"><img src='./images/linkedin.png' alt="image"/></i></a>
        <a href="/github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"><img src='./images/github.png' alt="image"/></i></a>
        <a href="/twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"><img src='./images/twitter.png' alt='image'/></i></a>
      </div>
      </footer>
    </div>
    </Router>
  );
};

export default Layout;
