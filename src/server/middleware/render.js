import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { StaticRouter } from 'react-router';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const renderMiddleware = () => (req, res) => {
    let html = req.html;
    const { App, name } = req.page;

    const htmlReplacements = {
        APP: ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <Provider store={req.store}>
                    <App />
                </Provider>
            </StaticRouter>
        ),
        STORE: JSON.stringify(
            req.store.getState()
        ).replace(/</g, '\\u003c'),
        CSS: assets[name].css,
        JS: assets[name].js
    };

    Object.keys(htmlReplacements).forEach(key => {
        const value = htmlReplacements[key];
        html = html.replace(
            new RegExp(escapeStringRegexp('${' + key + '}'), 'g'),
            value
        );
    });

    res.send(html);
};

export default renderMiddleware;
