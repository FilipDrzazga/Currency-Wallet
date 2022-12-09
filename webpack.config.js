const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: `./src/app.js`,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.min.js',
    },
    target: 'web',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-transform-runtime", ["styled-components",
                    {
                        "ssr": false,
                        "displayName": true,
                        "fileName": true,
                        "minify": false,
                        "pure": true
                    }
                    ]]
                }
            }
        }],
    },
     plugins: [
         new HtmlWebpackPlugin({
             template: './src//index.html',
             filename: './index.html'
         })
     ]
}