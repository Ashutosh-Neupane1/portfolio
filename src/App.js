import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Layout from './component/Layout';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';

import "./App.css"


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

