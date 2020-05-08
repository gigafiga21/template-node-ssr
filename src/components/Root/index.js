import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import canUseDOM from 'functions/canUseDOM';

export function hydrateRoot(App, rootProps) {
    const hasStore = rootProps && rootProps.redux && rootProps.redux.store;
    const Root = withRoot(App, { store: hasStore }, rootProps);

    ReactDOM.hydrate(
        <Root />,
        document.getElementById('root')
    );
}

export default function withRoot(
    Component,
    { server = false, store = false },
    { router = {}, redux = {} }
) {
    const Router = server ? StaticRouter : BrowserRouter;
    const Store = store ? Provider : Fragment;

    return hot(module)(
        () => (
            <Router {...router}>
                <Store {...redux}>
                    <Component />
                </Store>
            </Router>
        )
    );
}
