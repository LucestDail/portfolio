import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">{portfolioData.personalInfo.name}</h3>
            <p className="footer-title">{portfolioData.personalInfo.title}</p>
            <p className="footer-location">{portfolioData.personalInfo.location}</p>
          </div>

          <div className="footer-links">
            <h4>빠른 링크</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>소셜 미디어</h4>
            <div className="social-links">
              <a 
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="social-link"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.</p>
          <p>Made with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
