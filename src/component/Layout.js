import React from 'react';

const Layout = (props) => {
  return (
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
      <div className="Contact-social">
        <a href="/linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"><img src='./images/linkedin.png'/></i></a>
        <a href="/github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"><img src='./images/github.png'/></i></a>
        <a href="/twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"><img src='./images/twitter.png'/></i></a>
      </div>
      </footer>
    </div>
  );
};

export default Layout;
