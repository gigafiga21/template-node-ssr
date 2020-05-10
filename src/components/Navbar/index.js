import React from 'react';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className="Navbar">
            <h1 className="Navbar__title">The ultimate programmemes compilation</h1>
            <div className="Navbar__links">
                <a href="/ru/memes">Memes</a>
                <a href="/ru/doggos">Doggos</a>
                <a href="/ru/routes">Routes</a>
            </div>
        </div>
    );
}
