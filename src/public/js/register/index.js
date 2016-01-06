/**
 * Created by liangkuaisheng on .
 */

var HeaderArrow = require('../self_components/Headers/HeaderArrow');
var BtnBig = require('../self_components/Btns/BtnBig');
var Link = require('../self_components/Texts/Link');
var InputCommon = require('../self_components/Inputs/InputCommon');
var InputValidImgCode = require('../self_components/Inputs/InputValidImgCode');
var InputValid = require('../self_components/Inputs/InputValid');
var PlaceHold = require('../self_components/PlaceHolds/PlaceHold');

var ajaxData = require('../common/ajaxData');


var Page = React.createClass({
    getInitialState: function() {
        return {
            disabled: true,
            nameV: null,
            pass1V: null,
            pass2V: null,
            imgcodeV: null
        };
    },
    inputName: function () {
        var self = this;
        this.disabledBtn();
        var name = InputCommon.getVal(this.refs.name);
        if (name === '') {
            this.setState({nameV: null});
            return;
        }
        ajaxData.ajax('/register/hasName', {
            method: 'GET',
            data: {
                name: name
            }
        }).then(function (res) {
            console.log(res);
            if (res.status === 0) {
                if (res.data > 0) {
                    self.setState({nameV: false});
                }else{
                    self.setState({nameV: true});
                }
            }else{

            }
        });
    },
    disabledBtn : function (evt, id) {
        var name = InputCommon.getVal(this.refs.name);
        var pass1 = InputCommon.getVal(this.refs.pass1);
        var pass2 = InputCommon.getVal(this.refs.pass2);
        var imgcode = InputCommon.getVal(this.refs.imgcode);
        if (name.length > 0 &&
            pass1.length > 0 &&
            pass2.length > 0 &&
            pass1 === pass2 &&
            imgcode.length > 0) {
            this.setState({disabled: false});
        }else{
            this.setState({disabled: true});
        }
    },
    login: function () {
        var name = InputCommon.getVal(this.refs.name);
        var pass1 = InputCommon.getVal(this.refs.pass1);
        var pass2 = InputCommon.getVal(this.refs.pass2);
        var imgcode = InputCommon.getVal(this.refs.imgcode);
        console.log(name, pass1);
        ajaxData.ajax('/register/in', {
            method: 'POST',
            data: {
                name: name,
                pass: pass1,
                imgcode: imgcode
            }
        }).then(function (res) {
            console.log(res);
        });
    },
    render: function() {
        return (
            <div>
                <HeaderArrow title="注册"/>
                <div className="ui-container">
                    <PlaceHold />
                    <div className="ui-form ui-border-t">
                        <InputValid valid={this.state.nameV} validTips="feifa" ref="name" input={this.inputName} type="text" placeholder="帐号" />
                        <InputValid valid={this.state.pass1V} validTips="feifa" ref="pass1" input={this.disabledBtn} type="password" placeholder="请输入密码"/>
                        <InputValid valid={this.state.pass2V} validTips="feifa" ref="pass2" input={this.disabledBtn} type="password" placeholder="请再次输入密码"/>
                        <InputValidImgCode valid={this.state.imgcodeV} ref="imgcode" input={this.disabledBtn} type="text" placeholder="验证码"/>
                    </div>
                    <BtnBig disabled={this.state.disabled} click={this.login} txt="注册" className="ui-btn-lg ui-btn-primary"/>
                    <div className="ui-row-flex ui-whitespace">
                        <div className="ui-col ui-col">
                            <div className="ui-flex ui-flex-pack-start">
                                <Link url="login" reCur="true" txt="去登陆"/>
                            </div>
                        </div>
                        <div className="ui-col ui-col">
                            <div className="ui-flex ui-flex-pack-end">
                                <Link url="resetpass" txt="忘记密码？"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('reactContainer')
);