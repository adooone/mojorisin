const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './docs',
        hot: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: [/\.sass$/, /\.scss$/],
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
            },
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' },
            },
            {
                test: /\.(png|jpg|gif|ttf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 8192 },
                    },
                ],
            },
            {
                enforce: 'pre',
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: 'eslint-loader',
                // options: {
                //     // eslint options (if necessary)
                // },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: './src/public/index.html',
            filename: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash',
            React: 'react',
            ReactDOM: 'react-dom',
        }),
    ],
};
