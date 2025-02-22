import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/navbar.css';
import ContactForm from '../../pages/contactform.js';
import logo from '../../../src/assets/dishalogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          <a href="/" className="navbar-logo">
            <img src={logo} alt="dishalogo" />
          </a>
          <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a
                href="/"
                className={isActive("/") ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={isActive("/services") ? 'active' : ''}
              >
                Services
              </a>
            </li>
            <li className='li-custom'>
              <a
                href="/projects"
                className={isActive("/projects") ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className={isActive("/aboutus") ? 'active' : ''}
              >
                About us
              </a>
            </li>
          </ul>
          <button className="contact-btn" onClick={() => setIsModalOpen(true)}>
            Get in touch
          </button>
        </div>
      </nav>
      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
