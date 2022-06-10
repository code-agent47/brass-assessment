"use strict";
exports.__esModule = true;
/* eslint-disable no-shadow */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function PrivateRoute(_a) {
    var children = _a.children;
    var auth = true;
    return auth ? children : react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/" });
}
exports["default"] = react_1.memo(PrivateRoute);
