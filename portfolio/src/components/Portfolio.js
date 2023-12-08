import React from "react";
const Portfolio = ({ portfolioObject }) => (
    <div key={portfolioObject.id}>
        <h4>{portfolioObject.text}</h4>
        {/* Render your portfolio data using JSX */}
        <p>{portfolioObject.title}</p>
        <p>{portfolioObject.description}</p>
        <img src={portfolioObject.photo}
            width="300px"
            height="300px"
            alt="attachFile"
        />
        <p className="icon">
            <span><a href={portfolioObject.link}><i className="icon-eye"></i> DEMO</a></span>
            <span><a href={portfolioObject.detail}><i className="icon-data"></i> GitHub</a></span>
        </p>
    </div>
);
export default Portfolio;