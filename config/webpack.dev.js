const {merge} = require('webpack-merge')
var webpack = require("webpack");
const common = require('./webpack.common')
const paths = require('./paths')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
    // Set the mode to development or production
    mode: 'development',

    // Control how source maps are generated
    devtool: 'inline-source-map',

    // Spin up a server for quick development
    devServer: {
        /*static: {
            directory: paths.public,
        },*/
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    module: {
        rules: [

            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true, importLoaders: 1},
                    },
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        //
        new MiniCssExtractPlugin(),

        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/layouts/index.html',
            inject: true,
            chunks: ['main'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/auth/login.html',
            inject: true,
            chunks: ['main'],
            filename: 'login.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/auth/register.html',
            inject: true,
            chunks: ['main'],
            filename: 'register.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/auth/verifyemail.html',
            inject: true,
            chunks: ['main'],
            filename: 'verifyemail.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/auth/reset-password.html',
            inject: true,
            chunks: ['main'],
            filename: 'reset-password.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/auth/reset-security.html',
            inject: true,
            chunks: ['main'],
            filename: 'reset-security.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/layouts/dashboard-sidebar.html',
            inject: true,
            chunks: ['main'],
            filename: 'dashboard-sidebar.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/layouts/settings.html',
            inject: true,
            chunks: ['main'],
            filename: 'settings.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/layouts/buy-ip.html',
            inject: true,
            chunks: ['main'],
            filename: 'buy-ip.html'
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/pages/layouts/ip-order.html',
            inject: false,
            chunks: ['main'],
            filename: 'ip-order.html'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
})
