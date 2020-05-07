import pages from 'pages/pages.map.js';

const pageMiddleware = () => (req, res, next) => {
    req.page = { ...pages.memes, name: 'memes' };
    
    for (let name in pages) {
        const page = pages[name];

        if (req.url && req.url.indexOf(page.route) === 0) {
            req.page = {
                name: name,
                ...page
            };
        }
    }

    next();
};

export default pageMiddleware;
