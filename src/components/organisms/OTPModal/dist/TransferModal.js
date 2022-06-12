"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var TransferModalStyle_1 = require("./TransferModalStyle");
var Text_1 = require("../../atoms/HeaderText/Text");
var Text_2 = require("../../atoms/Text/Text");
var Button_1 = require("../../atoms/Button/Button");
var Img_1 = require("../../atoms/Image/Img");
var FieldComponent_1 = require("../../molecules/FieldComponent/FieldComponent");
var close_svg_1 = require("../../../assets/images/close.svg");
var FormValidations_1 = require("../../../helpers/FormValidations");
var react_redux_1 = require("react-redux");
var SubmitAction_1 = require("../../../redux/actions/SubmitAction");
var TransferModal = function (_a) {
    var handleClose = _a.handleClose, showSuccessModal = _a.showSuccessModal;
    var _b = react_1.useState({
        accountName: '',
        bank: '',
        accountNumber: '',
        amount: '',
        narration: ''
    }), fields = _b[0], setFields = _b[1];
    var _c = react_1.useState({
        accountName: '',
        bank: '',
        accountNumber: '',
        amount: '',
        narration: ''
    }), fieldErrors = _c[0], setFieldErrors = _c[1];
    var _d = react_1.useState([]), banks = _d[0], setBanks = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var state = react_redux_1.useSelector(function (state) { return state; });
    var store = react_redux_1.useStore();
    react_1.useEffect(function () {
        function fetchMyAPI() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, dispatch(SubmitAction_1.SubmitActionsGET('/bank?currency=NGN'))];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, setBanks(state.submitReducer.results.data)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchMyAPI();
    }, []);
    var onFormSubmit = function () {
        return function (evt) { return __awaiter(void 0, void 0, void 0, function () {
            var validateFields, value, reduxStore, value_1, updatedStore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.preventDefault();
                        return [4 /*yield*/, validate()];
                    case 1:
                        validateFields = _a.sent();
                        if (validateFields) {
                            return [2 /*return*/];
                        }
                        value = {
                            "type": "nuban",
                            "name": fields.accountName,
                            "account_number": fields.accountNumber,
                            "bank_code": fields.bank,
                            "currency": "NGN"
                        };
                        return [4 /*yield*/, dispatch(SubmitAction_1.SubmitActionsPOST("/transferrecipient", value))];
                    case 2:
                        _a.sent();
                        reduxStore = store.getState();
                        if (!(reduxStore.submitReducer.results.data.active === true)) return [3 /*break*/, 4];
                        value_1 = {
                            "source": "balance",
                            "amount": fields.amount,
                            "recipient": reduxStore.submitReducer.results.data.recipient_code,
                            "reason": "Holiday Flexing"
                        };
                        return [4 /*yield*/, dispatch(SubmitAction_1.SubmitActionsPOST("/transfer", value_1))];
                    case 3:
                        _a.sent();
                        updatedStore = store.getState();
                        console.log(updatedStore);
                        if (updatedStore.submitReducer.results.data.transfer_code !== undefined) {
                            showSuccessModal();
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    };
    var onInputChange = function (_a) {
        var name = _a.name, value = _a.value, error = _a.error;
        return __awaiter(void 0, void 0, void 0, function () {
            var fieldsValues, fieldErrorsValues;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fieldsValues = Object.assign({}, fields);
                        fieldErrorsValues = Object.assign({}, fieldErrors);
                        fieldsValues[name] = value;
                        fieldErrorsValues[name] = error;
                        return [4 /*yield*/, setFieldErrors(fieldErrorsValues)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, setFields(fieldsValues)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var validate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var person;
        return __generator(this, function (_a) {
            person = fieldErrors;
            if (Object.keys(fieldErrors).filter(function (k) { return person[k]; }).length) {
                return [2 /*return*/, true];
            }
            return [2 /*return*/, false];
        });
    }); };
    var verifyBankAccount = function (value, code) {
        return FormValidations_1.isAccountNumberFieldValid(value, code).then(function (returnResponse) {
            return returnResponse;
        });
    };
    return (react_1["default"].createElement(TransferModalStyle_1["default"], { className: "container-full" },
        react_1["default"].createElement("div", { className: "container-full center modal-container" },
            react_1["default"].createElement("div", { className: "modal-container__box" },
                react_1["default"].createElement("div", { className: "container-full modal-container__box__header" },
                    react_1["default"].createElement(Text_1["default"], { value: "Transfer Funds" }),
                    react_1["default"].createElement(Img_1["default"], { image: close_svg_1["default"], onClick: function () { return handleClose(); } })),
                react_1["default"].createElement("form", { onSubmit: onFormSubmit() },
                    react_1["default"].createElement("div", { className: "modal-container__box__content" },
                        react_1["default"].createElement("div", { className: "container-full modal-container__box__content__item" },
                            react_1["default"].createElement(Text_2["default"], { value: "*Account Name", className: "label" }),
                            react_1["default"].createElement(FieldComponent_1["default"], { value: fields.accountName, name: "accountName", placeholder: "Account Name", className: "auth-input", onChange: onInputChange, validate: function (val) {
                                    return val ? false : 'Account Name is Required';
                                }, required: true }),
                            react_1["default"].createElement("span", null, fieldErrors.accountName)),
                        react_1["default"].createElement("div", { className: "container-full modal-container__box__content__item" },
                            react_1["default"].createElement(Text_2["default"], { value: "*Bank", className: "label" }),
                            react_1["default"].createElement(FieldComponent_1["default"], { value: fields.bank, name: "bank", inputType: "select", options: banks, className: "auth-input", onChange: onInputChange, validate: function (val) {
                                    return val ? false : 'Bank is Required';
                                }, required: true }),
                            react_1["default"].createElement("span", null, fieldErrors.bank)),
                        react_1["default"].createElement("div", { className: "container-full modal-container__box__content__item" },
                            react_1["default"].createElement(Text_2["default"], { value: "*Account Number", className: "label" }),
                            react_1["default"].createElement(FieldComponent_1["default"], { value: fields.accountNumber, name: "accountNumber", placeholder: "Account Number", className: "auth-input", onChange: onInputChange, validate: function (value) { return verifyBankAccount(value, fields.bank); }, required: true }),
                            react_1["default"].createElement("span", null, fieldErrors.accountNumber)),
                        react_1["default"].createElement("div", { className: "container-full modal-container__box__content__item" },
                            react_1["default"].createElement(Text_2["default"], { value: "*Amount", className: "label" }),
                            react_1["default"].createElement(FieldComponent_1["default"], { value: fields.amount, name: "amount", placeholder: "Amount", className: "auth-input", onChange: onInputChange, validate: function (value) { return FormValidations_1.isAmountFieldValid(value); }, required: true }),
                            react_1["default"].createElement("span", null, fieldErrors.amount)),
                        react_1["default"].createElement("div", { className: "container-full modal-container__box__content__item" },
                            react_1["default"].createElement(Text_2["default"], { value: "Narration", className: "label" }),
                            react_1["default"].createElement(FieldComponent_1["default"], { value: fields.narration, name: "narration", placeholder: "Naration", className: "auth-input", onChange: onInputChange, validate: function (val) {
                                    return val ? false : false;
                                }, required: false }),
                            react_1["default"].createElement("span", null, fieldErrors.narration)),
                        react_1["default"].createElement(Button_1["default"], { type: "submit", value: "Fund Transfer", isLoading: state.submitReducer.fetching, className: "button" })))))));
};
exports["default"] = TransferModal;
