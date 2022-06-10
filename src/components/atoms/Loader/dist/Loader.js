"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_loader_spinner_1 = require("react-loader-spinner");
var LoadSpinner = function (_a) {
    var type = _a.type, _b = _a.color, color = _b === void 0 ? '#0C3B4D' : _b, _c = _a.height, height = _c === void 0 ? 30 : _c, _d = _a.width, width = _d === void 0 ? 30 : _d;
    return react_1["default"].createElement(react_loader_spinner_1.Oval, { color: color, height: height, width: width });
};
exports["default"] = LoadSpinner;
