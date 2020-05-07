import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { END } from 'redux-saga';
import { Provider } from 'react-redux';

import { StaticRouter } from 'react-router';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const fillHtml = (html, replacements) => {
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
    let html = req.html;
    const store = req.store;
    const { App, name } = req.page;
    const htmlReplacements = { CSS: assets[name].css, JS: assets[name].js };

    if (store) {
        if (store.rootTask) {
            store.rootTask.done.then(() => {
                htmlReplacements.STORE = JSON.stringify(store.getState())
                    .replace(/</g, '\\u003c');
                htmlReplacements.APP = ReactDOMServer.renderToString(
                        <StaticRouter location={req.url} context={{}}>
                            <Provider store={store}>
                                <App />
                            </Provider>
                        </StaticRouter>
                    );
                res.send(fillHtml(html, htmlReplacements));
            });

            App.fetchData(store.dispatch);
            store.dispatch(END);
            return;
        }
        htmlReplacements.APP = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        );
        htmlReplacements.STORE = JSON.stringify(store.getState())
            .replace(/</g, '\\u003c');
    } else {
        htmlReplacements.APP = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        );
        htmlReplacements.STORE = '{}';
    }

    res.send(fillHtml(html, htmlReplacements));
};

export default renderMiddleware;
