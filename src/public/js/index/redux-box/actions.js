/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";

import jQuery from 'jquery'
const $ = jQuery;

/**
 * 状态类型 和 状态
 * */


// 验证码
export const IMG_CODE = 'IMG_CODE';
export const sImgCode = {
    type: IMG_CODE
};


// 按钮
export const BTN_ENABLE = 'BTN_ENABLE';
export const BTN_DISABLE = 'BTN_DISABLE';
export const sBtnEnable = {
    type: BTN_ENABLE
};
export const sBtnDisable = {
    type: BTN_DISABLE
};

// 登录请求
export const LOGIN = 'LOGIN';
export function fLogin (status, data) {
    return {
        type: LOGIN,
        status,
        data
    }
}
export function fPostLogin (data) {
    return dispatch => {
        return $.ajax('/login/in', {
            method: 'POST',
            data
        })
            .then(res => {
                console.log(res);
            })
    }
}