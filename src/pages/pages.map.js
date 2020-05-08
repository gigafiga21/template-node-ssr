module.exports = {
    memes: {
        route: '/memes',
        storeConfig: require('pages/memes/store.js').storeConfig,
        App: require('pages/memes').default
    },
    doggos: {
        route: '/doggos',
        App: require('pages/doggos').default,
        storeConfig: require('pages/doggos/store.js').storeConfig,
    }
}
