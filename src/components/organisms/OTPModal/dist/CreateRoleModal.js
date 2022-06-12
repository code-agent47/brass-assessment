"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CreateRoleModalStyle_1 = require("./CreateRoleModalStyle");
var Text_1 = require("../../atoms/HeaderText/Text");
var Text_2 = require("../../atoms/Text/Text");
var Button_1 = require("../../atoms/Button/Button");
var Img_1 = require("../../atoms/Img/Img");
var react_redux_1 = require("react-redux");
var FieldComponent_1 = require("../../molecules/FieldComponent/FieldComponent");
var SubmitAction_1 = require("../../../redux/actions/SubmitAction");
var CreateRoleModal = /** @class */ (function (_super) {
    __extends(CreateRoleModal, _super);
    function CreateRoleModal(props) {
        var _this = _super.call(this, props) || this;
        _this.onInputChange = function (_a) {
            var name = _a.name, value = _a.value, error = _a.error;
            return __awaiter(_this, void 0, void 0, function () {
                var fields, fieldErrors;
                return __generator(this, function (_b) {
                    fields = Object.assign({}, this.state.fields);
                    fieldErrors = Object.assign({}, this.state.fieldErrors);
                    fields[name] = value;
                    fieldErrors[name] = error;
                    this.setState({ fields: fields, fieldErrors: fieldErrors });
                    return [2 /*return*/];
                });
            });
        };
        _this.state = {
            fields: {
                role: ''
            },
            fieldErrors: {
                role: ''
            }
        };
        return _this;
    }
    CreateRoleModal.prototype.componentDidMount = function () {
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
    };
    CreateRoleModal.prototype.componentWillUnmount = function () {
        document.getElementsByTagName('body')[0].style.overflow = "scroll";
    };
    CreateRoleModal.prototype.onFormSubmit = function () {
        var _this = this;
        return function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var roleData, validate, value;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        roleData = this.state.fields;
                        evt.preventDefault();
                        return [4 /*yield*/, this.validate()];
                    case 1:
                        validate = _b.sent();
                        if (validate) {
                            return [2 /*return*/];
                        }
                        value = {
                            "role_name": roleData.role
                        };
                        return [4 /*yield*/, this.props.SubmitActionsPOST("/corporate/roles", value)];
                    case 2:
                        _b.sent();
                        if (((_a = this.props.submitState.results) === null || _a === void 0 ? void 0 : _a.data.role_id) !== undefined) {
                            this.props.showSuccessModal();
                        }
                        this.props.handleClose();
                        return [2 /*return*/];
                }
            });
        }); };
    };
    CreateRoleModal.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fieldErrors, person;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.state.fields.role) return [3 /*break*/, 2];
                        fieldErrors = Object.assign({}, this.state.fieldErrors);
                        fieldErrors['role'] = 'Role is Required';
                        return [4 /*yield*/, this.setState({ fieldErrors: fieldErrors })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        person = this.state.fieldErrors;
                        if (Object.keys(this.state.fieldErrors).filter(function (k) { return person[k]; }).length)
                            return [2 /*return*/, true];
                        return [2 /*return*/, false];
                }
            });
        });
    };
    CreateRoleModal.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(CreateRoleModalStyle_1["default"], { className: "container-full" },
            react_1["default"].createElement("div", { className: "container-full modal-container" },
                react_1["default"].createElement("div", { className: "modal-container__box" },
                    react_1["default"].createElement("div", { className: "container-full modal-container__box__header" },
                        react_1["default"].createElement(Text_1["default"], { value: "Add New Role" }),
                        react_1["default"].createElement(Img_1["default"], { image: "/static/images/close.svg", onClick: function () { return _this.props.handleClose(); } })),
                    react_1["default"].createElement("form", { onSubmit: this.onFormSubmit() },
                        react_1["default"].createElement("div", { className: "modal-container__box__content" },
                            react_1["default"].createElement("div", { className: "container-full modal-container__box__content__item" },
                                react_1["default"].createElement(Text_2["default"], { value: "*role", className: "label" }),
                                react_1["default"].createElement(FieldComponent_1["default"], { value: this.state.fields.role, name: "role", placeholder: "role", className: "auth-input", onChange: this.onInputChange, validate: function (val) {
                                        return val ? false : 'Role is Required';
                                    } }),
                                react_1["default"].createElement("span", null, this.state.fieldErrors.role)),
                            react_1["default"].createElement(Button_1["default"], { type: "submit", value: "Create new role", isLoading: this.props.submitState.fetching, className: "button" })))))));
    };
    return CreateRoleModal;
}(react_1.Component));
var mapStateToProps = function (state) { return ({
    alertState: state.alertReducer,
    authState: state.signinReducer,
    submitState: state.submitReducer
}); };
var mapDispatchToProps = function (dispatch) { return ({
    SubmitActionsPOST: function (url, value) { return dispatch(SubmitAction_1.SubmitActionsPOST(url, value)); }
}); };
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
exports["default"] = connector(CreateRoleModal);
