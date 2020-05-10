import { matchPath } from "react-router";
import pages from 'pages/pages.map.js';

const pageMiddleware = () => (req, res, next) => {
    req.page = { ...pages.memes, name: 'memes', props: {} };
    
    for (let name in pages) {
        const page = pages[name];
        const match = matchPath(req.url, page.route);

        if (req.url && match !== null) {
            req.page = {
                ...page,
                name: name,
                props: match.params || {}
            };
        }
    }

    next();
};

export default pageMiddleware;
