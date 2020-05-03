import express from 'express';

let server = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('Server reloading...');

    try {
      server = require('./server').default;
    } catch (error) {
      // Do nothing
    }
  });
}

express()
  .use((req, res) => server.handle(req, res))
  .listen(process.env.PORT || 3000, () => {
    console.log(
      `React SSR App is running: http://localhost:${process.env.PORT || 3000}`
    );
  });
