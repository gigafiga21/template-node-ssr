module.exports = {
    memes: {
        route: '/memes',
        storeConfig: require('pages/memes/store.js').storeConfig,
        App: require('components/AppMemes').default
    },
    doggos: {
        route: '/doggos',
        App: require('components/AppDoggos').default,
        storeConfig: require('pages/doggos/store.js').storeConfig,
    }
}
