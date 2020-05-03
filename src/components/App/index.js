import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import DynamicImport from '../DynamicImport';
import Navbar from '../Navbar';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar title="The ultimate programmemes compilation">
                    <Link to="/memes">Memes</Link>
                    <Link to="/doggos">Doggos</Link>
                </Navbar>
                <Switch>
                    <Route key="memes" path="/memes" render={() => (<DynamicImport import={() => import('./../Memes')} />)} />
                    <Route key="doggos" path="/doggos" render={() => (<DynamicImport import={() => import('./../Doggos')} />)} />
                </Switch>
            </div>
        );
    }
}