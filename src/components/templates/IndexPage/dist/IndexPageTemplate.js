"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../atoms/Button/Button");
var Text_1 = require("../../atoms/HeaderText/Text");
var Header_1 = require("../../organisms/Header/Header");
var TransfersTable_1 = require("../../organisms/TransfersTable/TransfersTable");
var IndexPageTemplateStyle_1 = require("./IndexPageTemplateStyle");
var TransferModal_1 = require("../../organisms/TransferModal/TransferModal");
var SuccessModal_1 = require("../../organisms/SuccessModal/SuccessModal");
var OTPModal_1 = require("../../organisms/OTPModal/OTPModal");
var IndexPageTemplate = function () {
    var _a = react_1.useState(false), toggleTransferModal = _a[0], setToggleTransferModal = _a[1];
    var _b = react_1.useState(false), toggleSuccessModal = _b[0], setToggleSuccessModal = _b[1];
    var _c = react_1.useState(false), toggleOTPModal = _c[0], setToggleOTPModal = _c[1];
    var showTransferModal = function () {
        setToggleTransferModal(true);
    };
    var hideTransferModal = function () {
        setToggleTransferModal(false);
    };
    var renderTransferModal = function () {
        if (toggleTransferModal) {
            return (react_1["default"].createElement(TransferModal_1["default"], { handleClose: hideTransferModal, showOTPModal: showOTPModal }));
        }
    };
    var showSuccessModal = function () {
        setToggleSuccessModal(true);
    };
    var hideSuccessModal = function () {
        setToggleSuccessModal(false);
    };
    var renderSuccessModal = function () {
        if (toggleSuccessModal) {
            return (react_1["default"].createElement(SuccessModal_1["default"], { handleClose: hideSuccessModal }));
        }
    };
    var showOTPModal = function () {
        setToggleOTPModal(true);
    };
    var hideOTPModal = function () {
        setToggleOTPModal(false);
    };
    var renderOTPModal = function () {
        if (toggleOTPModal) {
            return (react_1["default"].createElement(OTPModal_1["default"], { handleClose: hideOTPModal, showSuccessModal: showSuccessModal }));
        }
    };
    return (react_1["default"].createElement(IndexPageTemplateStyle_1["default"], null,
        renderTransferModal(),
        renderSuccessModal(),
        renderOTPModal(),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: "container transactions" },
            react_1["default"].createElement("div", { className: "container-full transactions__desc" },
                react_1["default"].createElement(Text_1["default"], { value: "Transfer History" }),
                react_1["default"].createElement(Button_1["default"], { value: "Fund Transfer", className: "button", onClick: function () { return showTransferModal(); } }),
                react_1["default"].createElement("div", { className: "container-full transactions__table" },
                    react_1["default"].createElement(TransfersTable_1["default"], null))))));
};
exports["default"] = IndexPageTemplate;
