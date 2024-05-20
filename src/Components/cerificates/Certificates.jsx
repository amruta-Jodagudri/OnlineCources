import React from 'react';
import './Certificates.css';
import Certificate1 from '../../utils/certificates/Certificate1/Certificate1';

const Certificates = () => {
    return (
        <div className="certificates-container">
            <h2 className="certificates-heading">Unlock <span className="highlight">6 Certificates</span> & Internship Opportunities!</h2>
            <div className="certificates-content">
                <div className="certificate">
                    {/* <h3 className="certificate-title">Get 6 Industry Recognized Certificates!</h3>
                    <img src="certificate-image-url" alt="Certificate" className="certificate-image" />
                    <p className="certificate-description">
                        <span className="verified">Official and Verified</span>
                        <span className="credibility">Enhances Credibility</span>
                    </p> */}
                    <Certificate1 />
                </div>
                <div className="internship">
                    <h3 className="internship-title">Bag Internship Opportunities!</h3>
                    <img src="internship-image-url" alt="Internship" className="internship-image" />
                    <p className="internship-description">
                        With every course, we make you not only industry-ready but also help you crack your first internship.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
