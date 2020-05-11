import express from 'express';

import { createProxyMiddleware } from 'http-proxy-middleware';
import htmlMiddleware from './middleware/html';
import storeMiddleware from './middleware/store';
import renderMiddleware from './middleware/render';
import pageMiddleware from './middleware/page';

const server = express();
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR))

/**
 * Proxy to docker containers when dev
 * process.env.NODE_ENV === 'development' && server.use('/path', createProxyMiddleware(...));
 */

server.use(pageMiddleware());
server.use(htmlMiddleware());
server.use(storeMiddleware());
server.use(renderMiddleware());

export default server;
