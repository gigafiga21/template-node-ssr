import React from 'react';
import { connect } from 'react-redux';
import './Memes.css';

function Memes({ pictures = [] }) {
    return (
        <div className="Memes">
            {pictures.map(picture => {
                return (
                    <img className="Memes__meme" src={picture.src} />
                );
            })}
        </div>
    );
}

function mapStateToProps(store) {
    return { pictures: store.memes.pictures }
}

export default connect(mapStateToProps)(Memes);
