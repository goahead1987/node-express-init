/**
 * Created by liangkuaisheng on 15/12/30.
 */

    /**
     * <HeaderArrow title="登陆"/>
     **/

module.exports = React.createClass({
    back: function () {
        history.back();
    },
    render: function() {
        return (
            <header className="ui-header ui-header-stable ui-border-b">
                <i className="ui-icon-return" onClick={this.back}></i><h1>{this.props.title}</h1>
            </header>
        );
    }
});