/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";

import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './props';


// Connected Component:
const AppFn = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default AppFn;
/*
 import AppFn from './redux-box/AppFn';
 import store from './redux-box/store';
 import {Provider} from 'react-redux';
 import Page from './Page';
 var App = AppFn(Page);
* */