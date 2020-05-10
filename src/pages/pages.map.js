module.exports = {
    memes: {
        route: { path: '/:lang/memes' },
        storeConfig: require('pages/memes/store.js').storeConfig,
        App: require('pages/memes').default
    },
    doggos: {
        route: { path: '/:lang/doggos' },
        App: require('pages/doggos').default,
        storeConfig: require('pages/doggos/store.js').storeConfig,
    }
}
