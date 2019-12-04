const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackCleanPlugin = require('webpack-clean-plugin');

module.exports = (env, options) => {
    const devMode = options && options.mode !== 'production';
    return {
        entry: ['./src/index.jsx'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: devMode ? 'bundle.js' : 'bundle[hash].js',
            chunkFilename: devMode ? '[name].js' : '[name][hash].js',
            publicPath: '/',
            globalObject: 'this',
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                    exclude: [
                        /\\node_modules\\flag-icon-css\\.*\.svg([\\?\\#].*)?$/,
                    ],
                },
                {
                    test: /\.jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                    },
                },
                {
                    test: /\.(svg)(\?.*)?$/,
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                    },
                    include: [
                        /\\node_modules\\flag-icon-css\\.*\.(svg)(\?.*)?$/,
                    ],
                },
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
        devServer: {
            historyApiFallback: true
        },
        externals: {
            config: JSON.stringify({
                apiUrl: 'https://restful-user-api.herokuapp.com/api/v1'
            })
        }
    }
}
