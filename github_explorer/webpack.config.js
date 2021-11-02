const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //source-map do javascript para ver o js real
    entry: path.resolve(__dirname, 'src', 'index.tsx'), //arquivo de entrada
    output: { // arquivo de saida
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: { // servidor do webpack para reload da aplicação
        static: path.resolve(__dirname, 'public', 'index.html'),
        hot: true
    },
    plugins: [ // plugin para add o js no html automaticamente
        isDevelopment && new reactRefreshWebpackPlugin(), // plugin para recarregar sem perder as variaveis de estado
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            { // loader para converter react em js que o browser entende
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            { // loader para converter sass em css
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    }
};