/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";

import AppFn from './redux-box/AppFn';
import store from './redux-box/store';
import {Provider} from 'react-redux';
import Page from './Page';
var App = AppFn(Page);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('reactContainer'));