/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";

import {combineReducers} from 'redux';
import * as ACT from './actions';

let ReducersObj = {
    // 密码可见
    PassShow: function (state = {
        type: 'password',
        icon: 'closeeye'
    }, action = {}) {
        if (action.type === ACT.PASS_SHOW) {
            switch (state.type) {
                case 'password':
                    return {
                        type: 'text',
                        icon: 'openeye'
                    };
                case 'text':
                    return {
                        type: 'password',
                        icon: 'closeeye'
                    };
                default:
                    return state
            }
        }else{
            return state;
        }

    },
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
    BtnState: function (state = {
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
    },
    // 登录请求状态
    Login: function (state = {}, action = {}) {
        switch (action.status) {
            case 'success':
                return {

                };
            case 'error':
                return {

                };
            default:
                return state
        }
    }
};


const Reducers = combineReducers(ReducersObj);

export default Reducers;