"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DetailsModalStyle_1 = require("./DetailsModalStyle");
var Text_1 = require("../../atoms/HeaderText/Text");
var Text_2 = require("../../atoms/Text/Text");
var Img_1 = require("../../atoms/Image/Img");
var close_svg_1 = require("../../../assets/images/close.svg");
var react_redux_1 = require("react-redux");
var CurrencyFormat = require('react-currency-format');
var DetailsModal = function (_a) {
    var handleClose = _a.handleClose;
    var state = react_redux_1.useSelector(function (state) { return state; });
    return (react_1["default"].createElement(DetailsModalStyle_1["default"], { className: "container-full" },
        react_1["default"].createElement("div", { className: "container-full center modal-container" },
            react_1["default"].createElement("div", { className: "modal-container__box" },
                react_1["default"].createElement("div", { className: "container-full modal-container__box__header" },
                    react_1["default"].createElement(Text_1["default"], { value: "Transfer Details" }),
                    react_1["default"].createElement(Img_1["default"], { image: close_svg_1["default"], onClick: function () { return handleClose(); } })),
                react_1["default"].createElement("div", { className: "modal-container__box__content" },
                    react_1["default"].createElement("div", { className: "modal-container__box__content__item" },
                        react_1["default"].createElement(Text_1["default"], { value: "Account Name", className: "label" }),
                        react_1["default"].createElement(Text_2["default"], { value: state.submitReducer.results.data.recipient.details.account_name }))),
                react_1["default"].createElement("div", { className: "modal-container__box__content" },
                    react_1["default"].createElement("div", { className: "modal-container__box__content__item" },
                        react_1["default"].createElement(Text_1["default"], { value: "Account Number", className: "label" }),
                        react_1["default"].createElement(Text_2["default"], { value: state.submitReducer.results.data.recipient.details.account_number }))),
                react_1["default"].createElement("div", { className: "modal-container__box__content" },
                    react_1["default"].createElement("div", { className: "modal-container__box__content__item" },
                        react_1["default"].createElement(Text_1["default"], { value: "Bank", className: "label" }),
                        react_1["default"].createElement(Text_2["default"], { value: state.submitReducer.results.data.recipient.details.bank_name }))),
                react_1["default"].createElement("div", { className: "modal-container__box__content" },
                    react_1["default"].createElement("div", { className: "modal-container__box__content__item" },
                        react_1["default"].createElement(Text_1["default"], { value: "Amount Transferred", className: "label" }),
                        react_1["default"].createElement(CurrencyFormat, { value: state.submitReducer.results.data.amount / 100, displayType: 'text', thousandSeparator: true, prefix: '₦' }))),
                react_1["default"].createElement("div", { className: "modal-container__box__content" },
                    react_1["default"].createElement("div", { className: "modal-container__box__content__item" },
                        react_1["default"].createElement(Text_1["default"], { value: "Narration", className: "label" }),
                        react_1["default"].createElement(Text_2["default"], { value: state.submitReducer.results.data.reason }))),
                react_1["default"].createElement("div", { className: "modal-container__box__content" },
                    react_1["default"].createElement("div", { className: "modal-container__box__content__item" },
                        react_1["default"].createElement(Text_1["default"], { value: "Fee Charged", className: "label" }),
                        react_1["default"].createElement(Text_2["default"], { value: state.submitReducer.results.data.fee_charged }))),
                react_1["default"].createElement("div", { className: "modal-container__box__content" },
                    react_1["default"].createElement("div", { className: "modal-container__box__content__item" },
                        react_1["default"].createElement(Text_1["default"], { value: "Transfer Code", className: "label" }),
                        react_1["default"].createElement(Text_2["default"], { value: state.submitReducer.results.data.transfer_code })))))));
};
exports["default"] = DetailsModal;
