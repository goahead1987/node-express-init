/**
 * Created by liangkuaisheng on 15/12/30.
 */

    /**
     * <BtnBig1 disabled={this.state.disabled} click={this.login} txt="登陆"/>
     *
     * **/

module.exports = React.createClass({
    render: function() {
        return (
            <div className="ui-btn-wrap">
                <button disabled={this.props.disabled} onClick={this.props.click} className={this.props.className}>{this.props.txt}</button>
            </div>
        );
    }
});