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
var Text_1 = require("../../atoms/Text/Text");
var TransfersTableStyle_1 = require("./TransfersTableStyle");
var Pagination_1 = require("../Pagination/Pagination");
var react_redux_1 = require("react-redux");
var DashboardAction_1 = require("../../../redux/actions/DashboardAction");
var SubmitAction_1 = require("../../../redux/actions/SubmitAction");
var FetchLoading_1 = require("../../molecules/FetchLoading/FetchLoading");
var DetailsModal_1 = require("../DetailsModal/DetailsModal");
var CurrencyFormat = require('react-currency-format');
var TransfersTable = function () {
    var _a = react_1.useState(false), toggleDetailsModal = _a[0], setToggleDetailsModal = _a[1];
    var _b = react_1.useState(false), fetchLoading = _b[0], setFetchLoading = _b[1];
    var _c = react_1.useState(1), page = _c[0], setPage = _c[1];
    var _d = react_1.useState(false), showTable = _d[0], setShowTable = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var dashboardState = react_redux_1.useSelector(function (state) { return state.dashboardReducer; });
    var store = react_redux_1.useStore();
    react_1.useEffect(function () {
        var generatePageContent = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setFetchLoading(true);
                        return [4 /*yield*/, dispatch(DashboardAction_1.DashboardActions("/transfer?perPage=10&page=" + page))];
                    case 1:
                        _a.sent();
                        if (dashboardState.results !== null && dashboardState.results.data.length > 0) {
                            setShowTable(true);
                        }
                        setFetchLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        generatePageContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    var showDetailsModal = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var reduxStore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setFetchLoading(true);
                    return [4 /*yield*/, dispatch(SubmitAction_1.SubmitActionsGET("/transfer/" + id))];
                case 1:
                    _a.sent();
                    reduxStore = store.getState();
                    if (reduxStore.submitReducer.results !== null) {
                        setToggleDetailsModal(true);
                    }
                    setFetchLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var hideDetailsModal = function () {
        setToggleDetailsModal(false);
    };
    var renderDetailsModal = function () {
        if (toggleDetailsModal) {
            return (react_1["default"].createElement(DetailsModal_1["default"], { handleClose: hideDetailsModal }));
        }
    };
    var renderFetchLoading = function () {
        if (fetchLoading) {
            return (react_1["default"].createElement(FetchLoading_1["default"], null));
        }
    };
    var renderTableRow = function () {
        var _a;
        var responses = (_a = dashboardState.results) === null || _a === void 0 ? void 0 : _a.data.map(function (response, key) {
            return (react_1["default"].createElement("tr", { className: "table-row", key: key },
                react_1["default"].createElement("td", null,
                    " ",
                    response.createdAt.split("T")[0],
                    " "),
                react_1["default"].createElement("td", null,
                    " ",
                    response.recipient.details.account_name,
                    " "),
                react_1["default"].createElement("td", null,
                    " ",
                    response.recipient.details.bank_name,
                    " "),
                react_1["default"].createElement("td", null,
                    " ",
                    response.recipient.details.account_number,
                    "  "),
                react_1["default"].createElement("td", null,
                    react_1["default"].createElement(CurrencyFormat, { value: response.amount / 100, displayType: 'text', thousandSeparator: true, prefix: '₦' })),
                react_1["default"].createElement("td", null,
                    " ",
                    response.reason,
                    " "),
                react_1["default"].createElement("td", null,
                    react_1["default"].createElement("button", { className: "button", onClick: function () { return showDetailsModal(response.id); } }, " View Details "))));
        });
        return responses;
    };
    var renderTableGroup = function () {
        if (dashboardState.results !== null && showTable) {
            return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("table", null,
                    react_1["default"].createElement("thead", null,
                        react_1["default"].createElement("tr", { className: "table-header" },
                            react_1["default"].createElement("th", null,
                                react_1["default"].createElement(Text_1["default"], { value: "Date", className: "table-title" })),
                            react_1["default"].createElement("th", null,
                                react_1["default"].createElement(Text_1["default"], { value: "Account Name", className: "table-title" })),
                            react_1["default"].createElement("th", null,
                                react_1["default"].createElement(Text_1["default"], { value: "Bank", className: "table-title" })),
                            react_1["default"].createElement("th", null,
                                react_1["default"].createElement(Text_1["default"], { value: "Account Number", className: "table-title" })),
                            react_1["default"].createElement("th", null,
                                react_1["default"].createElement(Text_1["default"], { value: "Amount Transferred", className: "table-title" })),
                            react_1["default"].createElement("th", null,
                                react_1["default"].createElement(Text_1["default"], { value: "Narration", className: "table-title" })),
                            react_1["default"].createElement("th", null,
                                react_1["default"].createElement(Text_1["default"], { value: "Action", className: "table-title" })))),
                    react_1["default"].createElement("tbody", { className: "table-body" }, renderTableRow())),
                react_1["default"].createElement("div", { className: "container-full" }, renderPagination())));
        }
        if (dashboardState.results !== null && showTable === false) {
            return (react_1["default"].createElement("table", null,
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", { className: "table-header" },
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Date", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Account Name", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Bank", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Account Number", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Amount Transferred", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Narration", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Action", className: "table-title" })))),
                react_1["default"].createElement("tbody", { className: "table-body" },
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", { colSpan: 7 }, " You're yet to make any transfer ")))));
        }
    };
    var changePage = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setPage(value)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var renderPagination = function () {
        if (dashboardState.results !== null && dashboardState.results.meta !== undefined) {
            return (react_1["default"].createElement(Pagination_1["default"], { changePage: changePage }));
        }
    };
    return (react_1["default"].createElement(TransfersTableStyle_1["default"], null,
        renderDetailsModal(),
        renderFetchLoading(),
        react_1["default"].createElement("div", { className: "container-full" }, renderTableGroup())));
};
exports["default"] = TransfersTable;
