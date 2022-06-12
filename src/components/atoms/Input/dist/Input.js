"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputStyle_1 = require("./InputStyle");
var Input = function (_a) {
    var value = _a.value, type = _a.type, id = _a.id, onChange = _a.onChange, onFocus = _a.onFocus, onKeyPress = _a.onKeyPress, onKeyUp = _a.onKeyUp, className = _a.className, name = _a.name, placeholder = _a.placeholder, defaultChecked = _a.defaultChecked, useStyle = _a.useStyle, checked = _a.checked, onClick = _a.onClick, ref = _a.ref, required = _a.required;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, (useStyle === undefined) ? (react_1["default"].createElement(InputStyle_1["default"], { type: type, id: id, defaultChecked: defaultChecked, className: className, value: value, name: name, onChange: onChange, onFocus: onFocus, placeholder: placeholder, onKeyPress: onKeyPress, onKeyUp: onKeyUp, ref: ref, checked: checked, onClick: onClick, required: required })) :
        react_1["default"].createElement("input", { type: type, id: id, className: className, value: value, name: name, onChange: onChange, placeholder: placeholder, onKeyPress: onKeyPress, onKeyUp: onKeyUp, checked: checked, ref: ref, onClick: onClick, required: required })));
};
exports["default"] = Input;
