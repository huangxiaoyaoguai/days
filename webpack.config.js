// var ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyESPlugin = require('uglifyjs-webpack-plugin')

const webpack = require('webpack');

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
    optimization:{
      splitChunks:{
          cacheGroups:{
              commons:{
                chunks:'initial',
                minChunks:2,    //用两个模块以上同时引用的模块才会抽离出来
                minSize:0       //限制大小，太小了没必要抽离
              }
          }
      }
  },
    plugins: [
　　 　　new HtmlWebpackPlugin({
	 		filename: '../index.html',
　　　　 　　template: path.resolve(__dirname, './src/htm/index.html'),
　　　　　　 inject: true
　　　　 }),


// new webpack.DllPlugin({
//       path: path.join(__dirname, 'dist', '[name].manifest.json'),
//       name: '[name]_[hash]',
//     }),
new webpack.ProvidePlugin({
            React: 'react',
            Component:'react',
            ReactDOM: 'react-dom',
        }),

        new UglifyESPlugin({
              // 多嵌套了一层
              uglifyOptions: {
                compress: {
                  // 删除所有的 `console` 语句，可以兼容ie浏览器
                  drop_console: true,
                  // 内嵌定义了但是只用到一次的变量
                  collapse_vars: true,
                  // 提取出出现多次但是没有定义成变量去引用的静态值
                  reduce_vars: true,
                },
                output: {
                  // 最紧凑的输出
                  beautify: false,
                  // 删除所有的注释
                  comments: true,
                }
              }
            })
　　 ]
};