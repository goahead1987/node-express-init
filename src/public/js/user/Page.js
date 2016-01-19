/**
 * Created by liangkuaisheng on 16/1/12.
 */

"use strict";

import {Component} from 'react';
import {
    Container,
    Group,
    List,
    Field,
    Button,
    Icon,
    Grid,
    Col,
    Modal,
    Loader
} from 'amazeui-touch';
import NavBarBack from '../self_components/Headers/NavBarBack';
import Link from '../self_components/Texts/Link';


export default class Page extends Component {

    render() {
        return (
            <Container fill {...this.props}>
                <NavBarBack title="账户" amStyle="secondary" />

            </Container>
        );
    }
}