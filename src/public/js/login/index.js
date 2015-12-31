/**
 * Created by liangkuaisheng on 15/12/30.
 */

var HeaderArrow = require('../self_components/Headers/HeaderArrow');
var BtnBig = require('../self_components/Btns/BtnBig');
var Link = require('../self_components/Texts/Link');
var InputClose = require('../self_components/Inputs/InputClose');
var PlaceHold = require('../self_components/PlaceHolds/PlaceHold');


var Page = React.createClass({
    getInitialState: function() {
        return {disabled: true};
    },
    disabledBtn : function (evt, id) {
        var name = InputClose.getVal(this.refs.name);
        var pass = InputClose.getVal(this.refs.pass);
        if (name.length > 0 && pass.length > 0) {
            this.setState({disabled: false});
        }else{
            this.setState({disabled: true});
        }
    },
    login: function () {
        var name = InputClose.getVal(this.refs.name);
        var pass = InputClose.getVal(this.refs.pass);
        console.log(name, pass);
    },
    render: function() {
        return (
            <div>
                <HeaderArrow title="登陆"/>
                <div className="ui-container">
                    <PlaceHold />
                    <div className="ui-form ui-border-t">
                        <InputClose ref="name" input={this.disabledBtn} type="text" placeholder="帐号" />
                        <InputClose ref="pass" input={this.disabledBtn} type="password" placeholder="密码"/>
                    </div>
                    <BtnBig disabled={this.state.disabled} click={this.login} txt="登陆" className="ui-btn-lg ui-btn-primary"/>
                    <div className="ui-row-flex ui-whitespace">
                        <div className="ui-col ui-col">
                            <div className="ui-flex ui-flex-pack-start">
                                <Link url="register" txt="立即注册"/>
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