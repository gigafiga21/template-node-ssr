import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { END } from 'redux-saga';
import withRoot from 'components/Root';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const renderApp = (req) => {
    const Root = withRoot(
        req.page.App,
        { server: true, store: req.store },
        {
            router: { location: req.url, context: {} },
            redux: { store: req.store }
        }
    );

    return renderToString(<Root/>);
};

const extractStore = (store) => {
    return store ?
        JSON.stringify(store.getState())
            .replace(/</g, '\\u003c') :
        '{}';
}

const constructPage = (req) => {
    let html = req.html;
    const { store, page: { name } } = req;
    const replacements = {
        APP: renderApp(req),
        STORE: extractStore(store),
        CSS: assets[name].css,
        JS: assets[name].js,
    };

    Object.keys(replacements).forEach(key => {
        const value = replacements[key];
        html = html.replace(
            new RegExp(escapeStringRegexp('${' + key + '}'), 'g'),
            value
        );
    });

    return html;
};

const renderMiddleware = () => (req, res) => {
    const { store, page: { App } } = req;

    if (store && store.rootTask) {
        store.rootTask.done.then(() => {
            res.send(constructPage(req));
        });

        App.fetchData(store.dispatch, match.props);
        store.dispatch(END);
        return;
    }

    res.send(constructPage(req));
};

export default renderMiddleware;
