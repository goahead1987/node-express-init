/**
 * Created by liangkuaisheng on 16/1/13.
 */

"use strict";

import {Component} from 'react';
import {
    NavBar
} from 'amazeui-touch';

const dataLeft = {
    leftNav: [{
        title: '返回',
        icon: 'left-nav'
    }]
};


export default class NavBarBack extends Component {
    render() {
        return (
                <NavBar
                    {...this.props}
                    {...dataLeft}
                    onSelect={
                        (item, e) => {
                            history.back();
                        }
                    } />
        );
    }
}