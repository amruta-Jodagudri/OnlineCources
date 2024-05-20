// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/overview">Overview</Link>
        <Link to="/curriculum">Curriculum</Link>
        <Link to="/refund">Refund</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/certificates">Certificates</Link>
      </div>
    </nav>
  );
}

export default Navbar;
