import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">경력 & 교육</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          <div className="timeline-section">
            <h3 className="timeline-title">경력</h3>
            {portfolioData.experience.map(exp => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-job-title">{exp.title}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-section">
            <h3 className="timeline-title">교육</h3>
            {portfolioData.education.map(edu => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-job-title">{edu.degree}</h4>
                    <span className="timeline-company">{edu.school}</span>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
