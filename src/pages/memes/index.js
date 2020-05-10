import React from 'react';
import configureStore from './store.js';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import canUseDOM from 'functions/canUseDOM';

import { hydrateRoot } from 'components/Root';
import Navbar from 'components/Navbar';
import 'pages/index.css';
import './Memes.css';

function Memes({ pictures = [] }) {
    return (
        <>
            <Helmet title="Memes" />
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

const App = connect(mapStateToProps)(Memes)
export default App;

if (canUseDOM()) {
    hydrateRoot(App, { redux: { store: configureStore() } });
}
