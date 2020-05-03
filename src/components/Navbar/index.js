import React from 'react';

import './Navbar.css';

export default function Navbar({ title, children }) {
    return (
        <div className="Navbar">
            <h1 className="Navbar__title">{title}</h1>
            <div className="Navbar__links">
                {children}
            </div>
        </div>
    );
}
