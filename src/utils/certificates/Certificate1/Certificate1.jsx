import React from 'react';
import './Certificate1.css';
//import certificateImage from './certificate-image-url'; // Adjust the path accordingly

const Certificate1 = () => {
    return (
        <div className="certificate-container">
            <h2 className="certificate-heading">Get 6 Industry Recognized Certificates!</h2>
            <div className="certificate-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLZrPPBvEfJ8Xinzc27-1F9ZaKFHZImWl3p2OnfeKMg&s" alt="Certificate" className="certificate-image" />
                <div className="certificate-info">
                    <p className="certificate-description">
                        <span className="verified">Official and Verified</span>
                        <span className="credibility">Enhances Credibility</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certificate1;
