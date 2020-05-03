import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doggosGet } from '../../store/doggos/actions';

import './Doggos.css';

function Doggos({ picture, doggosGet }) {
    return (
        <div className="Doggos">
            {picture ? <img className="Doggos__doggo" src={picture} /> : null}
            <button className="Doggos__get" onClick={() => doggosGet()}>Get doggo</button>
        </div>
    );
}

function mapStateToProps(store) {
    return { picture: store.doggos.picture }
}

function mapDispatchToProps(dispatch) {
    return { doggosGet: bindActionCreators(doggosGet, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Doggos);
