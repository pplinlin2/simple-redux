module.exports = {
    entry: './App.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query: {
                    presets: ['react', 'es2015', 'stage-0'], 
                    plugins: ['transform-decorators-legacy'], 
                }
            }
        ]
    }
};
