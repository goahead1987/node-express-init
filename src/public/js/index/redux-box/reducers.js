/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";

import {combineReducers} from 'redux';
import * as ACT from './actions';

let ReducersObj = {
    // 更新验证码
    ImgCode: function (state = {
        url: '/tools/getcodeimg/imgcode.jpg?time=' + (new Date()).getTime()
    }, action = {}) {
        switch (action.type) {
            case ACT.IMG_CODE:
                return {
                    url: '/tools/getcodeimg/imgcode.jpg?time=' + (new Date()).getTime()
                };
            default:
                return state
        }
    },
    // 切换按钮状态
    BtnState:  function (state = {
        status: true
    }, action = {}) {
        switch (action.type) {
            case ACT.BTN_ENABLE:
                return {
                    status: false
                };
            case ACT.BTN_DISABLE:
                return {
                    status: true
                };
            default:
                return state
        }
    }
};


const Reducers = combineReducers(ReducersObj);

export default Reducers;