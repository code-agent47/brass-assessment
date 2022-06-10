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
exports.__esModule = true;
var react_1 = require("react");
var PaginationStyle_1 = require("./PaginationStyle");
var Img_1 = require("../../atoms/Image/Img");
var react_redux_1 = require("react-redux");
var next_svg_1 = require("../../../assets/images/next.svg");
var prev_svg_1 = require("../../../assets/images/prev.svg");
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.updateActivePage = function (value) {
        this.props.changePage(value);
    };
    Pagination.prototype.renderNextButton = function () {
        var _this = this;
        // let nextPage = this.props.dashboardState.results.data.meta.next;
        var nextPage = 1;
        if (nextPage > 1) {
            return (react_1["default"].createElement(Img_1["default"], { image: next_svg_1["default"], onClick: function () { return _this.updateActivePage(nextPage.toString()); }, alt: "next-btn" }));
        }
        else {
            return (react_1["default"].createElement(Img_1["default"], { image: next_svg_1["default"], className: "disabled", onClick: function () { return _this.updateActivePage(nextPage.toString()); }, alt: "next-btn" }));
        }
    };
    Pagination.prototype.renderPrevButton = function () {
        var _this = this;
        // let prevPage = this.props.dashboardState.results.data.meta.previous;
        var prevPage = 0;
        if (prevPage >= 1) {
            return (react_1["default"].createElement(Img_1["default"], { image: prev_svg_1["default"], alt: "prev-btn", onClick: function () { return _this.updateActivePage(prevPage.toString()); } }));
        }
        else {
            return (react_1["default"].createElement(Img_1["default"], { image: prev_svg_1["default"], className: "disabled", alt: "prev-btn", onClick: function () { return _this.updateActivePage(prevPage.toString()); } }));
        }
    };
    Pagination.prototype.render = function () {
        return (react_1["default"].createElement(PaginationStyle_1["default"], null,
            react_1["default"].createElement("div", { className: "controls" },
                react_1["default"].createElement("div", { className: "controls-con" },
                    react_1["default"].createElement("div", { className: "count-control" },
                        react_1["default"].createElement("div", { className: "pagination" },
                            this.renderPrevButton(),
                            this.renderNextButton()))))));
    };
    return Pagination;
}(react_1.Component));
var mapStateToProps = function (state) { return ({
    alertState: state.alertReducer,
    dashboardState: state
}); };
var connector = react_redux_1.connect(mapStateToProps, {});
exports["default"] = connector(Pagination);
