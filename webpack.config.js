var path = require("path");
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 设置常用路径

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,"./");
var BUILD_PATH = path.resolve(ROOT_PATH,"build");

module.exports = {
    // 入口文件
    entry:{
        "app":path.resolve(APP_PATH,"index.jsx")
    },
    output:{ // 输出配置
        path:BUILD_PATH,//输出目录
        filename:"bundle.js"//输出文件名称
    },
    node: {
        fs: "empty"
    },
    devtool: 'source-map',//开发者工具,它的作用是生成源码映射,方便调试;
    module: {
        loaders:[{//加载规则：除了node_modules文件之外，其他所有符合/\.js$正则表达式的文件都将用于babel-loader编译;
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        },
        { 
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
      }]
     },
     resolve: {
       modules: [__dirname, 'node_modules'],
        alias:{
        },
        extensions: ['*','.js','.jsx']
     },
    plugins:[ //插件列表
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            template: './src/tpl/app.html', //加载模板
            inject: 'body' 
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:9300'
        })
    ]
}
