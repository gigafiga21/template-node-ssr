import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'components/Navbar';
import './AppMemes.css';

function AppMemes({ pictures = [] }) {
    return (
        <>
            <Navbar />
            <div className="Memes">
                {pictures.map(picture => {
                    return (
                        <img className="Memes__meme" src={picture.src} />
                    );
                })}
            </div>
        </>
    );
}

function mapStateToProps(store) {
    return { pictures: store.pictures }
}

export default connect(mapStateToProps)(AppMemes);
