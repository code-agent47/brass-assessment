"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeaderStyle_1 = require("./HeaderStyle");
var Img_1 = require("../../atoms/Image/Img");
var brass_logo_png_1 = require("../../../assets/images/brass-logo.png");
var avatar_svg_1 = require("../../../assets/images/avatar.svg");
var Header = function () {
    return (react_1["default"].createElement(HeaderStyle_1["default"], null,
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement(Img_1["default"], { image: brass_logo_png_1["default"], alt: "logo", className: "logo" }),
            react_1["default"].createElement(Img_1["default"], { image: avatar_svg_1["default"], alt: "avatar", className: "avatar" }))));
};
exports["default"] = Header;
