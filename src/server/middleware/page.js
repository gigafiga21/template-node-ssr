import AppMemes from 'components/AppMemes';
import AppDoggos from 'components/AppDoggos';
const Apps = { AppMemes, AppDoggos };

import pages from 'pages/pages.json';

const pageMiddleware = () => (req, res, next) => {
    req.page = {
        App: AppMemes,
        name: 'memes'
    };
    
    for (let name in pages) {
        const page = pages[name];

        if (req.url && req.url.indexOf(page.route) === 0) {
            req.page = {
                App: Apps[page.App],
                name: name
            };
        }
    }

    next();
};

export default pageMiddleware;
