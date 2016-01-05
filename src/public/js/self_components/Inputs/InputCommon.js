/**
 * Created by liangkuaisheng on 15/12/30.
 */

var InputCommon = {};

InputCommon.clickIcon = function () {
    var model = this.refs.model;
    model.value = '';
    model.dispatchEvent(new Event('input', { bubbles: true }));
};

InputCommon.getVal = function (obj) {
    return obj.refs.model.value;
};
InputCommon.setVal = function (obj, value) {
    obj.refs.model.value = value;
};

InputCommon.validObj = {
    'null': '',
    'true': 'ui-icon-checked-s',
    'false': 'ui-icon-warn-block'
};

module.exports = InputCommon;