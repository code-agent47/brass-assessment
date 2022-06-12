"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SuccessModalStyle_1 = require("./SuccessModalStyle");
var Text_1 = require("../../atoms/HeaderText/Text");
var Text_2 = require("../../atoms/Text/Text");
var Img_1 = require("../../atoms/Image/Img");
var close_svg_1 = require("../../../assets/images/close.svg");
var SuccessModal = function (_a) {
    var handleClose = _a.handleClose;
    return (react_1["default"].createElement(SuccessModalStyle_1["default"], { className: "container-full" },
        react_1["default"].createElement("div", { className: "container-full center modal-container" },
            react_1["default"].createElement("div", { className: "modal-container__box" },
                react_1["default"].createElement("div", { className: "container-full modal-container__box__header" },
                    react_1["default"].createElement(Text_1["default"], { value: "Transfer Successful" }),
                    react_1["default"].createElement(Img_1["default"], { image: close_svg_1["default"], onClick: function () { return handleClose(); } })),
                react_1["default"].createElement("div", { className: "container-full modal-container__box__content" },
                    react_1["default"].createElement(Text_2["default"], { value: "Transaction queued successfully." }))))));
};
exports["default"] = SuccessModal;
