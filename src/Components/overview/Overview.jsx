// Overview.jsx
import React from 'react';
import './Overview.css';

function Overview() {
  return (
    <div className="overview-container">
      <div className="heading">
        <h2>An IIT Delhi Alumni Initiative</h2>
      </div>
      <div className="description">
        <p>Become an Expert in the field of <span className="highlight">Data science with 6 courses</span></p>
      </div>
      <p className='heading1'>A specially crafted tech kickstarter with 5 extensive.</p>
      <div className="features">
        <div className="feature">
          <h3>Personal Mentorship</h3>
        </div>
        <div className="feature">
          <h3>Internship Assistance</h3>
        </div>
        <div className="feature">
          <h3>Industry Certified Courses</h3>
        </div>
      </div>
      <div className="buttons">
        <button className="enroll-button">Enroll Now</button>
        <button className="know-more-button">Know More</button>
      </div>
    </div>
  );
}

export default Overview;
