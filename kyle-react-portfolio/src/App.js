import React from "react";

import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        {/* <h1>Kyle Duesler</h1> */}
        {/* <nav>
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
        </nav> */}
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Kyle Duesler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
            <a target="_blank" rel="noreferrer" href="https://github.com/kduesler">GitHub</a>
          </li>
          <li>
            <a href="linkedin.com">LinkdIn</a>
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
