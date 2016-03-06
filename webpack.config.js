var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module : {
        loaders : [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }]
    },
    resolve : {
        extensions: ['', '.js', '.jsx']
    }
};
