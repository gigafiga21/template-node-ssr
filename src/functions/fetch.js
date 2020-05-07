import serverFetch from 'node-fetch';

export default typeof fetch !== 'undefined' ? fetch : serverFetch;
