"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PaginationStyle_1 = require("./PaginationStyle");
var Text_1 = require("../../atoms/HeaderText/Text");
var Button_1 = require("../../atoms/Button/Button");
var react_redux_1 = require("react-redux");
var swipeHorizontally = require('swipepackage').swipeHorizontally;
var Pagination = function (_a) {
    var changePage = _a.changePage;
    var dashboardState = react_redux_1.useSelector(function (state) { return state.dashboardReducer; });
    react_1.useEffect(function () {
        invokeSlider();
    }, []);
    var invokeSlider = function () {
        swipeHorizontally(document.getElementsByClassName("pagination-numbers")[0], 2);
    };
    var updateActivePage = function (value) {
        changePage(value);
    };
    var pagination = 10;
    var renderPageNumbers = function () {
        var pageNumber = 0;
        var pageNumbers = [];
        var activePage = dashboardState.results.meta.page;
        var totalPage = dashboardState.results.meta.pageCount;
        for (var i = 0; i < totalPage; i++) {
            pageNumber++;
            pageNumbers.push(pageNumber);
        }
        var pageNumberListing = pageNumbers.map(function (pageNumber, key) {
            if (pageNumber === activePage) {
                return (react_1["default"].createElement("div", { className: "pagination-number__item pagination-number__active-item", key: key, onClick: function () { updateActivePage(pageNumber); } },
                    react_1["default"].createElement(Text_1["default"], { value: "" + pageNumber })));
            }
            return (react_1["default"].createElement("div", { className: "pagination-number__item", key: key, onClick: function () { updateActivePage(pageNumber); } },
                react_1["default"].createElement(Text_1["default"], { value: "" + pageNumber })));
        });
        return pageNumberListing;
    };
    var renderNextButton = function () {
        var nextPage = dashboardState.results.meta.page + 1;
        if (nextPage > 1 && nextPage <= dashboardState.results.meta.pageCount) {
            return (react_1["default"].createElement(Button_1["default"], { className: "button", onClick: function () { return updateActivePage(nextPage); }, value: "NEXT" }));
        }
        else {
            return (react_1["default"].createElement(Button_1["default"], { className: "button button--disabled", value: "NEXT" }));
        }
    };
    var renderPrevButton = function () {
        var prevPage = dashboardState.results.meta.page - 1;
        if (prevPage >= 1) {
            return (react_1["default"].createElement(Button_1["default"], { className: "button", onClick: function () { return updateActivePage(prevPage); }, value: "PREV" }));
        }
        else {
            return (react_1["default"].createElement(Button_1["default"], { className: "button button--disabled", value: "PREV" }));
        }
    };
    return (react_1["default"].createElement(PaginationStyle_1["default"], { className: "container-full" },
        react_1["default"].createElement("div", { className: "pagination-info" },
            react_1["default"].createElement(Text_1["default"], { value: "Showing 1 of " + ((pagination > dashboardState.results.meta.total) ? dashboardState.results.meta.total : pagination) + " of " + dashboardState.results.meta.total + " entries" })),
        react_1["default"].createElement("div", { className: "pagination-action-group" },
            react_1["default"].createElement("div", { className: "pagination-action-group__button" }, renderPrevButton()),
            react_1["default"].createElement("div", { className: "pagination-numbers pagination-number" }, renderPageNumbers()),
            react_1["default"].createElement("div", { className: "pagination-action-group__button" }, renderNextButton()))));
};
exports["default"] = Pagination;
