const path = require('path');

module.exports = {
    entry: './dist/server/server.js',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'server.bundle.js',
        publicPath: '/'
    },
    target: 'node',
    mode: 'production'
};
