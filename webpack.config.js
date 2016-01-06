/*
* webpack 配置文件
* 运行 webpack --display-error-details
* webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
* webpack --watch   //监听变动并自动打包
* webpack -p    //压缩混淆脚本，这个非常非常重要！-p 是很重要的参数
* webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了
* */

var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        login: './src/public/js/login/index',
        register: './src/public/js/register/index'
    },
    //入口文件输出配置
    output: {
        path: 'build/public/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            //{ test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' }
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        //查找module的话从这里开始查找
        root: '/Users/liangkuaisheng/wspro/node-express-init/src/public', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
        }
    },
    externals: {
        // require("jquery") 是引用自外部模块的
        // 对应全局变量 jQuery
        "jquery": "jQuery",
        "angular": "angular"
    }
};