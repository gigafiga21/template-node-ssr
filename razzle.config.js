'use strict';
const path = require('path');
const pages = require('./src/pages/pages.json');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config;

    if (target === 'web') {
        const devServer = appConfig.entry.client[0];
        const entries = {};

        for (let page in pages) {
            entries[page] = [ devServer, path.resolve(__dirname, pages[page].entry) ]
        }

        appConfig.output.filename = 'static/js/[name].js';
        appConfig.entry = entries;
    }

    appConfig.resolve.alias.components = path.resolve(__dirname, 'src/components');
    appConfig.resolve.alias.functions = path.resolve(__dirname, 'src/functions');
    appConfig.resolve.alias.store = path.resolve(__dirname, 'src/store');
    appConfig.resolve.alias.pages = path.resolve(__dirname, 'src/pages');

    return appConfig;
  },
};