import React, { Component } from 'react';
import { connect } from 'react-redux';
import configureStore from './store.js';
import { DOGGOS_GET } from 'store/doggos/types';
import { Helmet } from 'react-helmet';
import canUseDOM from 'functions/canUseDOM';

import { hydrateRoot } from 'components/Root';
import Navbar from 'components/Navbar';
import 'pages/index.css';
import './Doggos.css';

class Doggos extends Component {
    static fetchData(dispatch) {
        dispatch({ type: DOGGOS_GET });
    }

    render() {
        const { picture, doggosGet } = this.props;
        return (
            <>
                <Helmet title="Doggos" />
                <Navbar />
                <div className="Doggos">
                    {picture ? <img className="Doggos__doggo" src={picture} /> : null}
                    <button className="Doggos__get" onClick={() => doggosGet()}>Get doggo</button>
                </div>
            </>
        );
    }
}

function mapStateToProps(store) {
    return { picture: store.picture }
}

function mapDispatchToProps(dispatch) {
    return { doggosGet: dispatch.bind(null, { type: DOGGOS_GET }) }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Doggos)
export default App;

if (canUseDOM()) {
    hydrateRoot(App, { redux: { store: configureStore() } });
}
