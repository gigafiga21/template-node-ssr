import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { StaticRouter } from 'react-router';
import App from '../../components/App';

const renderMiddleware = () => (req, res) => {
    let html = req.html;
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
        ).replace(/</g, '\\u003c')
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
