import express from 'express';

import htmlMiddleware from './middleware/html';
import storeMiddleware from './middleware/store';
import renderMiddleware from './middleware/render';
import pageMiddleware from './middleware/page';

const server = express();
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
server.use(pageMiddleware());
server.use(htmlMiddleware());
server.use(storeMiddleware());
server.use(renderMiddleware());

export default server;
