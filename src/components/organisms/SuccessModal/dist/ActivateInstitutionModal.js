"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ActivateInstitutionModalStyle_1 = require("./ActivateInstitutionModalStyle");
var Text_1 = require("../../atoms/HeaderText/Text");
var Text_2 = require("../../atoms/Text/Text");
var Button_1 = require("../../atoms/Button/Button");
var Img_1 = require("../../atoms/Image/Img");
var X_svg_1 = require("../../../assets/images/X.svg");
var ActivateInstitution = function (_a) {
    var handleClose = _a.handleClose;
    return (react_1["default"].createElement(ActivateInstitutionModalStyle_1["default"], { className: "container-full" },
        react_1["default"].createElement("div", { className: "container-full center modal-container" },
            react_1["default"].createElement("div", { className: "modal-container__box" },
                react_1["default"].createElement("div", { className: "container-full modal-container__box__header" },
                    react_1["default"].createElement(Text_1["default"], { value: "Deactivate Institution" }),
                    react_1["default"].createElement(Img_1["default"], { image: X_svg_1["default"], onClick: function () { return handleClose(); } })),
                react_1["default"].createElement("div", { className: "container-full modal-container__box__content" },
                    react_1["default"].createElement(Text_2["default"], { value: "When you activate an institution, users from that institution will be allowed to access the portal. Are you sure you want to activate [institution-name]." })),
                react_1["default"].createElement("div", { className: "container-full modal-container__box__action" },
                    react_1["default"].createElement(Button_1["default"], { value: "Cancel", className: "button --cancel" }),
                    react_1["default"].createElement(Button_1["default"], { value: "Activate [institution]", className: "button --activate" }))))));
};
exports["default"] = ActivateInstitution;
