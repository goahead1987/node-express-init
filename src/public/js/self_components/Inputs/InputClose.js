/**
 * Created by liangkuaisheng on 15/12/30.
 */


    /**
     * <InputClose ref="name" input={this.disabledBtn} type="text" placeholder="帐号" />
     *
     * */
var InputClose = React.createClass({
    clickIcon: function () {
        var model = this.refs.model;
        model.value = '';
        model.dispatchEvent(new Event('input', { bubbles: true }));
    },
    render: function() {
        return (
            <div className="ui-form-item ui-form-item-pure ui-border-b">
                <input  type={this.props.type} placeholder={this.props.placeholder} ref="model"
                        onKeyDown={this.props.keydown}
                        onKeyPress={this.props.keypress}
                        onKeyUp={this.props.keyup}
                        onFocus={this.props.focus}
                        onBlur={this.props.blur}
                        onInput={this.props.input}
                        onChange={this.props.change} />
                <span className="ui-icon-close"
                      onTouchStart={this.clickIcon}></span>
            </div>
        );
    }
});

InputClose.getVal = function (obj) {
    return obj.refs.model.value;
};
InputClose.setVal = function (obj, value) {
    obj.refs.model.value = value;
};

module.exports = InputClose;