import React, { useEffect, useState } from 'react';
import './Curriculum.css';

function Curriculum() {
  const [isDataScience, setIsDataScience] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDataScience(prevState => !prevState);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="curriculum-container">
      <div className="changing-text1">
        {isDataScience ? 'DataScience Course Learning Path' : 'Full Stack Course Learning Path'}
      </div>
      <div className="changing-text">
        <span className="highlight">
          {isDataScience ? (
            <>
              <span className="purple">Data</span>
              <span className="purple-shade"> Sci</span>
              <span className="orange">ence</span>
            </>
          ) : (
            <>
              <span className="purple">Full</span>
              <span className="purple-shade"> St</span>
              <span className="orange">ack</span>
            </>
          )}
        </span>
      <span className='unchange-text'> Course Curriculum</span>
      </div>
      <div className="columns">
        <div className="column">
          <div className="column-text">
            <div className="column-title">Data Science</div>
            <div className="column-description">Become an expert in Data Science with 6 courses.</div>
          </div>
          <div className="column-button">
            <button className="view-curriculum-button">
              <span className="eye-icon">👁️</span> View Curriculum
            </button>
          </div>
        </div>
        <div className="column">
          <div className="column-text">
            <div className="column-title">Full Stack</div>
            <div className="column-description">Master Full Stack development with comprehensive courses.</div>
          </div>
          <div className="column-button">
            <button className="view-curriculum-button">
              <span className="eye-icon">👁️</span> View Curriculum
            </button>
          </div>
        </div>
        <div className="column">
          <div className="column-text">
            <div className="column-title">Machine Learning</div>
            <div className="column-description">Dive deep into Machine Learning techniques and tools.</div>
          </div>
          <div className="column-button">
            <button className="view-curriculum-button">
              <span className="eye-icon">👁️</span> View Curriculum
            </button>
          </div>
        </div>
        <div className="column">
          <div className="column-text">
            <div className="column-title">Cyber Security</div>
            <div className="column-description">Learn the essentials of Cyber Security with practical courses.</div>
          </div>
          <div className="column-button">
            <button className="view-curriculum-button">
              <span className="eye-icon">👁️</span> View Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
