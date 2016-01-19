/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";

import * as ACT from './actions';

/**
 * 属性
 * */

export function mapStateToProps(state)  {
    return {
        passtype: state.PassShow.type,
        passicon: state.PassShow.icon,
        imgcode: state.ImgCode.url,
        btnstatus: state.BtnState.status
    };
}

/**
 * 操作
 * */

export function mapDispatchToProps(dispatch) {
    return {
        dispatch,

        // 更新验证码
        changePassShow: () => dispatch(ACT.sPassShow),
        // 更新验证码
        changeImgCode: () => dispatch(ACT.sImgCode),
        // 按钮禁止
        btnEnable: () => dispatch(ACT.sBtnEnable),
        btnDisable: () => dispatch(ACT.sBtnDisable),
        login: (data, modal)=> dispatch(ACT.fPostLogin(data, modal))
    };
}