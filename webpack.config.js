// var ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');


const path = require('path');

module.exports = {
	mode:'development',
	
　　entry: path.resolve(__dirname, './src/index.js'),
　　output: {
　　　　path: path.resolve(__dirname, './dist'),
　　　　filename: '[name]_[hash:8].js'
　　},

　　module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                   
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
　　 　　new HtmlWebpackPlugin({
	 		filename: '../index.html',
　　　　 　　template: path.resolve(__dirname, './src/htm/index.html'),
　　　　　　 inject: true
　　　　 })
　　 ]
};