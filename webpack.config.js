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
            filename: 'about.html',
            template: 'src/about.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: 'src/contact.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: 'src/blog.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'blog--post-01.html',
            template: 'src/blog--post-01.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'works--post-page00.html',
            template: 'src/works--post-page00.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'works--post-page01.html',
            template: 'src/works--post-page01.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'works--post-page02.html',
            template: 'src/works--post-page02.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'works--post-page03.html',
            template: 'src/works--post-page03.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'works--post-page04.html',
            template: 'src/works--post-page04.html',
            chunks: []
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}