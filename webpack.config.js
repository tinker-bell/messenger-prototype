var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');

// filename: 'scripts/[name]-bundle-[hash].js'
//new ExtractTextPlugin('styles/main-bundle-[hash].css'),
module.exports = {
    entry: {main: "./src/js/main.js"},
    output: {
        path: path.resolve(__dirname, './src/static'),
        publicPath: "/static/",
        filename: 'scripts/[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
            },
            {test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader?optional[]=runtime&stage=0"},
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                exclude: /\/favicon.ico$/,
                loader: 'file-loader',
                query: { name: 'images/[name].[hash:8].[ext]' }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles/main-bundle.css'),
        new AssetsPlugin()
    ]
};