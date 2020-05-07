import React from 'react';

import './Navbar.css';

export default function Navbar({ title, children }) {
    return (
        <div className="Navbar">
            <h1 className="Navbar__title">The ultimate programmemes compilation</h1>
            <div className="Navbar__links">
                <a href="/memes">Memes</a>
                <a href="/doggos">Doggos</a>
            </div>
        </div>
    );
}
