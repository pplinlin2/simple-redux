module.exports = {
    entry: './App.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { loader: 'babel-loader' }
        ]
    }
};
