/**
 * Created by liangkuaisheng on 15/12/30.
 */


/**
 * <InputCloseImgCode ref="name" input={this.disabledBtn} type="text" placeholder="帐号" />
 *
 * */


var InputCommon = require('./InputCommon');

var InputCloseImgCode = React.createClass({
    getInitialState: function () {
        return {imgUrl: '/tools/getcodeimg/imgcode.jpg?time=' + (new Date()).getTime()};
    },
    clickIcon: InputCommon.clickIcon,
    changeImg: function () {
        this.clickIcon();
        this.setState({imgUrl: '/tools/getcodeimg/imgcode.jpg?time=' + (new Date()).getTime()});
    },
    render: function () {
        return (
            <div className="ui-form-item ui-form-item-r ui-border-b">
                <input type={this.props.type} placeholder={this.props.placeholder} ref="model"
                       onKeyDown={this.props.keydown}
                       onKeyPress={this.props.keypress}
                       onKeyUp={this.props.keyup}
                       onFocus={this.props.focus}
                       onBlur={this.props.blur}
                       onInput={this.props.input}
                       onChange={this.props.change}/>
                <button type="button" className="ui-border-l"
                        onTouchStart={this.changeImg}>
                    <img src={this.state.imgUrl} alt="验证码"/>
                </button>
                <span className="ui-icon-close"
                      onTouchStart={this.clickIcon}></span>
            </div>
        );
    }
});

module.exports = InputCloseImgCode;