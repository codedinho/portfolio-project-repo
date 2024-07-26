import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Home } from './Home';
import { AboutMe } from './AboutMe';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const targetId = location.hash.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="app">
      <div className="blob">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
        </svg>
      </div>
      <nav>
        <div className="menu-icon" onClick={toggleSidebar}>
          {sidebarOpen ? '✕' : '☰'}
        </div>
        <div className="headerText">
          <h1>Charlie.Dev</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleSidebar}>
          ✕
        </div>
        <ul>
          <li onClick={toggleSidebar}>
            <Link to="#home">Home</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to="#about">About</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to="#projects">Projects</Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Home id="home" />
        <AboutMe id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
      <footer>
        <p>&copy; Copyright © 2024. All rights are reserved.</p>
      </footer>
    </div>
  );
};

export default App;
