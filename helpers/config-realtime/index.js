/**
 * Created by liangkuaisheng on 15/10/10.
 */

'use strict';

var path = require('path');

/*
* 获取配置文件相对路径
* */
function getRelativePath (root, leaf) {
    var arr = leaf.split(root)[1].split('/'),
        pathArr = [];
    for (var i = 0; i < arr.length-1; i++) {
        pathArr.push('..');
    }
    return pathArr.join('/');
}

/*
* 暴露模块
* */
function config () {

    var defaultFilename = 'dev',
        defaultFiletype = 'json',
        defaultConfigPath = 'config';
    /*
    * 默认参数
    * */
    this.opt = {
        readRuntime: true,
        filename: defaultFilename,
        fileType: defaultFiletype,
        configPath: defaultConfigPath
    };

    var rootPath = process.cwd(),
        leafPath = __dirname,
        configEnv = process.env.NODE_ENV || defaultFilename;
    this.__params = {
        absoluteFilePath: path.join(rootPath, defaultConfigPath, configEnv + '.' + defaultFiletype),
        configEnv: configEnv
    };

    /*
    * 初始化默认参数，可以不执行
    * */
    this.init = function (opt) {
        for (var key in opt) {
            if (opt.hasOwnProperty(key)) {
                this.opt[key] = opt[key];
            }
        }
        this.__params.configEnv = process.env.NODE_ENV || this.opt.filename || defaultFilename;
        this.__params.absoluteFilePath = path.join(rootPath, this.opt.configPath, this.__params.configEnv + '.' + this.opt.fileType);
    };

    /*
    * 获取数据，key为undefined，null，‘’时返回所有数据
    * key可以为 'aaa.bbb.ccc' 形式
    * */
    this.get = function (key) {
        if (this.opt.readRuntime && require.cache[this.__params.absoluteFilePath]) {
            delete require.cache[this.__params.absoluteFilePath];
        }
        var configVal = require(this.__params.absoluteFilePath);
        if (typeof key === 'undefined' || key === null || key === '') {
            return configVal;
        }
        var keyArr = key.split('.');
        var obj = configVal;
        for (var i = 0; i < keyArr.length; i++) {
            obj = obj[keyArr[i]];
        }
        return obj;
    }

}
config.instance = null;
config.getInstance = function(){
    if(this.instance === null){
        this.instance = new config();
    }
    return this.instance;
};

module.exports = config.getInstance();