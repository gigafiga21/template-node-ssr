import React, { Fragment } from 'react';
import { StaticRouter, BrowserRouter } from 'react-router';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

export default function withRoot(Component, { server = false, store = false }) {
    const Router = server ? StaticRouter : BrowserRouter;
    const Store = store ? Provider : Fragment;

    return hot(module)(
        ({ router, redux }) => (
            <Router {...router}>
                <Store {...redux}>
                    <Component />
                </Store>
            </Router>
        )
    );
}
