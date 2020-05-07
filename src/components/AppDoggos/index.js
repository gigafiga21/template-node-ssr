import React from 'react';

import { connect } from 'react-redux';
import { DOGGOS_GET } from 'store/doggos/types';

import Navbar from 'components/Navbar';
import './AppDoggos.css';

function AppDoggos({ picture, doggosGet }) {
    return (
        <>
            <Navbar />
            <div className="Doggos">
                {picture ? <img className="Doggos__doggo" src={picture} /> : null}
                <button className="Doggos__get" onClick={() => doggosGet()}>Get doggo</button>
            </div>
        </>
    );
}

function mapStateToProps(store) {
    return { picture: store.picture }
}

function mapDispatchToProps(dispatch) {
    return { doggosGet: dispatch.bind(null, { type: DOGGOS_GET }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDoggos);
