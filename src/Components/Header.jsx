import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Logo</div>
            <div className="nav-buttons">
                <button className="login">Login</button>
                <button className="signup">Signup</button>
            </div>
        </header>
    );
}

export default Header;
