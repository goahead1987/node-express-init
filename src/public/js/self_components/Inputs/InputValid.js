/**
 * Created by liangkuaisheng on 15/12/30.
 */


/**
 * <InputValid ref="name" input={this.disabledBtn} type="text" placeholder="帐号" />
 *
 * */

var InputCommon = require('./InputCommon');

var InputValid = React.createClass({
    getInitialState: function () {
        return {imgUrl: '/tools/getcodeimg/imgcode.jpg?time=' + (new Date()).getTime()};
    },
    validObj: InputCommon.validObj,
    render: function () {
        return (
            <div>
                <div className="ui-form-item ui-form-item-pure ui-border-b">
                    <input type={this.props.type} placeholder={this.props.placeholder} ref="model"
                           onKeyDown={this.props.keydown}
                           onKeyPress={this.props.keypress}
                           onKeyUp={this.props.keyup}
                           onFocus={this.props.focus}
                           onBlur={this.props.blur}
                           onInput={this.props.input}
                           onChange={this.props.change}/>
                    <span className={this.validObj[this.props.valid + '']}></span>
                </div>
                <div className="ui-form-valid-tip">
                    {this.props.validTips}
                </div>
            </div>
        );
    }
});

module.exports = InputValid;