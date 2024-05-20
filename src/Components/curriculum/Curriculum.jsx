import React from 'react';
import './Curriculum.css';

const Curriculum = () => {
  const icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaI496cfJX4fBlDo8kcAtjdkyAq9CyHOpvvxdRy9eqg&s";
  return (
    <div className="curriculum-container">
      <h2 className="curriculum-heading">How does the Internship Program work?</h2>
      <div className="steps-container">
        <div className="step-row">
          <div className="step">
            <div className="step-icon-container">
              <img src={icon} alt="Icon" className="step-icon" />
            </div>
            <p className="step-text">Learn from our structured pre-recorded courses made by experts to meet industry needs</p>
          </div>
          <div className="step">
            <div className="step-icon-container">
              <img src={icon} alt="Icon" className="step-icon" />
            </div>
            <p className="step-text">Personal mentors to guide and help you throughout your journey as a friend</p>
          </div>
          <div className="step">
            <div className="step-icon-container">
              <img src={icon} alt="Icon" className="step-icon" />
            </div>
            <p className="step-text">Get guaranteed paid internships after completion of the program along with course completion certificates</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step">
            <div className="step-icon-container">
              <img src={icon} alt="Icon" className="step-icon" />
            </div>
            <p className="step-text">1:1 live doubt solving support available throughout the day to clear your doubts instantly</p>
          </div>
          <div className="step">
            <div className="step-icon-container">
              <img src={icon} alt="Icon" className="step-icon" />
            </div>
            <p className="step-text">Build major projects which make your resume stand apart</p>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>
      </div>
      <button className="apply-button">Apply now for ₹ 2999</button>
    </div>
  );
}

export default Curriculum;
