/**
 * Created by liangkuaisheng on 16/1/4.
 */
'use strict';

/**
 *
 * status
 * 0 成功
 * 9999 未知
 *
 *
 * 1xxx
 * 前端错误
 * 1999
 * 权限不足
 * 1001
 * 参数错误
 * 1002
 * 验证码错误
 * 1003
 * 用户名或密码错误
 *
 *
 *
 * 2xxx
 * 数据库错误
 * 2001
 * 插入失败
 * 2002
 * 删除失败
 * 2003
 * 修改失败
 * 2004
 * 查询失败
 * 2999
 * 数据库链接失败
 *
 *
 * 3xxx
 * 后端业务报错
 *
 * */

module.exports = {
    Success: function (data) {
        return {
            status: 0,
            data: typeof data === 'undefined'? null : data
        }
    },
    Unkown: {
        status: 9999,
        msg: '未知错误',
        data: null
    },

    /*
    * 前端错误
    * */
    PermissionErr: {
        status: 1999,
        msg: '权限不足',
        data: null
    },
    ParamsErr: {
        status: 1001,
        msg: '参数错误',
        data: null
    },
    ImgCodeErr: {
        status: 1002,
        msg: '验证码错误',
        data: null
    },
    NamePassErr: {
        status: 1003,
        msg: '用户名或密码错误',
        data: null
    },


    /*
    * 数据库错误
    * */
    DbLinkErr: {
        status: 2999,
        msg: '数据库链接失败',
        data: null
    },
    DbCreateErr: {
        status: 2001,
        msg: '插入数据失败',
        data: null
    },
    DbDeleteErr: {
        status: 2002,
        msg: '删除数据失败',
        data: null
    },
    DbUpdateErr: {
        status: 2003,
        msg: '修改失败',
        data: null
    },
    DbSelectErr: {
        status: 2004,
        msg: '查询失败',
        data: null
    }
};