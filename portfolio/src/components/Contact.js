import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">연락처</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">{portfolioData.contact.message}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>이메일</h4>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a 
                  href={portfolioData.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {portfolioData.contact.github}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>위치</h4>
                <span>{portfolioData.contact.location}</span>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h3>프로젝트에 관심이 있으신가요?</h3>
            <p>새로운 프로젝트나 협업 기회에 대해 이야기해보세요!</p>
            <div className="contact-actions">
              <a 
                href={`mailto:${portfolioData.contact.email}?subject=포트폴리오 문의`}
                className="btn-primary"
              >
                <i className="fas fa-envelope"></i>
                이메일 보내기
              </a>
              <a 
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <i className="fab fa-github"></i>
                GitHub 방문
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
