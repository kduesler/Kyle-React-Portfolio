import React from "react";

import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Kyle Duesler</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">About the Developer</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/kduesler">GitHub</a>
          </li>
          <li>
            <a href="linkdin.com">LinkdIn</a>
          </li>
          <li>
            <a href="instagram.com">Instagram</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
