import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{portfolioData.about.title}</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {portfolioData.about.description}
            </p>
            
            <div className="skills-section">
              <h3 className="skills-title">기술 스택</h3>
              <div className="skills-grid">
                {portfolioData.about.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">{portfolioData.projects.length}+</div>
              <div className="stat-label">프로젝트</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">년 경험</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{portfolioData.about.skills.length}+</div>
              <div className="stat-label">기술</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
