/**
 * Created by liangkuaisheng on 15/12/30.
 */

/**
 * <Link url="xxx" reCur="true" txt="立即注册"/>
 *
 * <Link click={this.clickr} txt="忘记密码？"/>
 * **/

module.exports = React.createClass({
    click: function (evt, id) {
        var url = this.props.url,
            click = this.props.click;
        if (typeof url === 'string' && url.length > 0) {
            if (this.props.reCur === 'true') {
                history.replaceState(null, null, url);
                location.reload();
            }else{
                location.href = this.props.url;
            }
        }else{
            if (click && click.call) {
                click.call(this, evt, id);
            }
        }
    },
    render: function() {
        return (
            <a ref="link" onClick={this.click}>{this.props.txt}</a>
        );
    }
});