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
    changeBtn (e) {
        var name = this.refs.name.getValue();
        var pass = this.refs.pass.getValue();
        var imgcode = this.refs.imgcode.getValue();
        if (name.length > 0 && pass.length > 0 && imgcode.length > 0) {
            this.props.btnEnable();
        }else{
            this.props.btnDisable();
        }
    }
    changeImgCode (e) {
        this.props.changeImgCode();
        this.refs.imgcode.getFieldDOMNode().value = '';
        this.changeBtn(e);
    }
    login (e) {
        var name = this.refs.name.getValue();
        var pass = this.refs.pass.getValue();
        var imgcode = this.refs.imgcode.getValue();
        this.props.login({
            name,
            pass,
            imgcode
        }, this.refs.modal);
    }
    render() {
        return (
            <Container fill {...this.props}>
                <NavBarBack title="登陆" amStyle="secondary" />
                <Group
                    noPadded>
                    <List>
                        <List.Item
                            nested="input">
                            <Field
                                ref="name"
                                onChange={this.changeBtn.bind(this)}
                                type="text"
                                placeholder="请输入账号"/>
                        </List.Item>
                        <List.Item
                            nested="input">
                            <Field
                                ref="pass"
                                onChange={this.changeBtn.bind(this)}
                                type={this.props.passtype}
                                placeholder="请输入密码"/>
                            <Icon name={this.props.passicon} onClick={this.props.changePassShow} />
                        </List.Item>
                        <List.Item
                            nested="input">
                            <Field
                                ref="imgcode"
                                onChange={this.changeBtn.bind(this)}
                                type="text"
                                placeholder="请输入验证码"/>
                            <div className="imgcode-box" onClick={this.changeImgCode.bind(this)}>
                                <img src={this.props.imgcode} alt=""/>
                            </div>
                        </List.Item>
                    </List>
                </Group>
                <div className="ui-pd-box">
                    <Button
                        onClick={this.login.bind(this)}
                        disabled={this.props.btnstatus}
                        className="ui-btn-lg"
                        amStyle="secondary"
                        block>登录</Button>
                </div>
                <Grid align="between">
                    <Col cols={2}>
                        <Link url="register" txt="立即注册"/>
                    </Col>
                    <Col cols={2} className="tx-al-rt">
                        <Link url="resetpass" txt="忘记密码？"/>
                    </Col>
                </Grid>
                <Modal
                    ref="modal"
                    title="登录中..."
                    role="loading">
                    <Loader
                        amStyle='warning'
                        rounded/>
                </Modal>
            </Container>
        );
    }
}