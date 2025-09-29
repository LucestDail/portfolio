import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = portfolioData.personalInfo.subtitle;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;

    const typeText = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    const timer = setTimeout(typeText, 1000);
    return () => clearTimeout(timer);
  }, [fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            안녕하세요!<br />
            <span className="highlight">{portfolioData.personalInfo.name}</span>입니다
          </h1>
          
          <div className="hero-subtitle">
            <span className="typing-text">
              {displayText}
              {isTyping && <span className="cursor">|</span>}
            </span>
          </div>
          
          <div className="hero-info">
            <p className="hero-location">
              <i className="fas fa-map-marker-alt"></i>
              {portfolioData.personalInfo.location}
            </p>
            <p className="hero-role">{portfolioData.personalInfo.title}</p>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToProjects}>
              프로젝트 보기
            </button>
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <img 
              src={portfolioData.personalInfo.profileImage} 
              alt={portfolioData.personalInfo.name}
              className="profile-image"
            />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
