import path from 'path';
import express from 'express';

import htmlMiddleware from './middleware/html';
import storeMiddleware from './middleware/store';
import renderMiddleware from './middleware/render';

const publicPath = path.join(__dirname, '/public');
const server = express();

server.use(express.static(publicPath));
server.use(htmlMiddleware());
server.use(storeMiddleware());
server.use(renderMiddleware());

export default server;
