/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";

import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers';
import thunkMiddleware from 'redux-thunk'
import reduxLogger from 'redux-logger'

const loggerMiddleware = reduxLogger();
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)

export function configureStore(initialState) {
    return createStoreWithMiddleware(Reducers, initialState)
}

const store = configureStore()

// Store:
export default store;