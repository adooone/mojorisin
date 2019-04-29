const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const pcckageConfig = require('../package.json');


module.exports = {
    entry: path.resolve(__dirname, '../front', 'index.js'),
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        // before(app) {
        //     app.get('*', (req, res) => {
        //         res.send('index');
        //     });
        // },
        contentBase: path.resolve(__dirname, '../docs'),
        hot: true,
        historyApiFallback: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../docs'),
        publicPath: '/',
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
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 8192 },
                    },
                ],
            },
            // {
            //     test: [/\.js$/, /\.jsx$/],
            //     exclude: /(node_modules|bower_components)/,
            //     use: { loader: 'babel-loader' },
            // },
            {
                test: /\.(js|jsx|mjs)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    plugins: [
                        'react-hot-loader/babel',
                        // Enables React code to work with HMR.
                        ['@babel/plugin-transform-runtime', {}],
                    ],
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        //
                    },
                },
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
        new CleanWebpackPlugin(['docs']),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../front/public/', 'index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, '../front/public/', 'favicon.ico'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash',
            React: 'react',
            ReactDOM: 'react-dom',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('PRODUCTION'),
            'process.env.VERSION': JSON.stringify(pcckageConfig.version),
            //
        }),
        new Dotenv(),
        // new webpack.DefinePlugin({
        //     'process.env.NEPTUNE_DEV_HOST': JSON.stringify(process.env.NEPTUNE_DEV_HOST),
        //     'process.env.NEPTUNE_PROD_HOST': JSON.stringify(process.env.NEPTUNE_PROD_HOST),
        // }),
    ],
};
