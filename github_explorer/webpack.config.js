const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //source-map do javascript para ver o js real
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo de entrada
    output: { // arquivo de saida
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: { // servidor do webpack para reload da aplicação
        static: path.resolve(__dirname, 'public', 'index.html')
    },
    plugins: [ // plugin para add o js no html automaticamente
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            { // loader para converter react em js que o browser entende
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            { // loader para converter sass em css
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    }
};