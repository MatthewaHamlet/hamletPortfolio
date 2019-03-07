const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
    entry: {
       index: './src/app.js',
    },
    output: {
        path: __dirname + '/dist/build',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8800,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'postcss-loader'
                ]
              },
              {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                  'file-loader'
              ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename:'landing.html',
            template: 'src/landing.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'works--post-page',
            template: 'src/works--post-page.html',
            chunks: []
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}