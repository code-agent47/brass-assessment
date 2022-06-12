"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Text_1 = require("../../atoms/Text/Text");
var Img_1 = require("../../atoms/Image/Img");
var InstitutionsTableStyle_1 = require("./InstitutionsTableStyle");
var nike_svg_1 = require("../../../assets/images/nike.svg");
var elipses_svg_1 = require("../../../assets/images/elipses.svg");
var amazon_svg_1 = require("../../../assets/images/amazon.svg");
var active_dot_svg_1 = require("../../../assets/images/active-dot.svg");
var inactive_dot_svg_1 = require("../../../assets/images/inactive-dot.svg");
var details_icon_svg_1 = require("../../../assets/images/details-icon.svg");
var InstitutionsTable = function () {
    var timeOutId = null;
    var _a = react_1.useState(false), selectedMenu = _a[0], setSelectedMenu = _a[1];
    var _b = react_1.useState(false), toggleDetailsModal = _b[0], setToggleDetailsModal = _b[1];
    var onClickHandler = function (value) {
        if (selectedMenu !== false) {
            setSelectedMenu(false);
            return;
        }
        setSelectedMenu(value);
    };
    var onBlurHandler = function () {
        timeOutId = setTimeout(function () {
            setSelectedMenu(false);
        });
    };
    var onFocusHandler = function () {
        clearTimeout(timeOutId);
    };
    var showDetailsModal = function () {
        setToggleDetailsModal(true);
    };
    var hideDetailsModal = function () {
        setToggleDetailsModal(false);
    };
    var renderDetailsModal = function () {
        if (toggleDetailsModal) {
            return (react_1["default"].createElement(react_1["default"].Fragment, null));
        }
    };
    return (react_1["default"].createElement(InstitutionsTableStyle_1["default"], null,
        renderDetailsModal(),
        react_1["default"].createElement("div", { className: "container-full" },
            react_1["default"].createElement("table", null,
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", { className: "table-header" },
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement("input", { type: "checkbox" }),
                            react_1["default"].createElement(Img_1["default"], { image: nike_svg_1["default"] })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Name", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Code", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Admin Email", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Creation Date", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Status", className: "table-title" })),
                        react_1["default"].createElement("th", null))),
                react_1["default"].createElement("tbody", { className: "table-body" },
                    react_1["default"].createElement("tr", { className: "table-row" },
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("input", { type: "checkbox", onChange: function () { } }),
                            react_1["default"].createElement(Img_1["default"], { image: nike_svg_1["default"] })),
                        react_1["default"].createElement("td", { className: "name" },
                            react_1["default"].createElement("div", { className: "company-image" },
                                react_1["default"].createElement("div", { className: "container-full center" },
                                    react_1["default"].createElement(Img_1["default"], { image: amazon_svg_1["default"] }))),
                            react_1["default"].createElement("p", null, "Amazon ")),
                        react_1["default"].createElement("td", null, " AMZ "),
                        react_1["default"].createElement("td", null, " jeff.bezos@amazon.com "),
                        react_1["default"].createElement("td", null, " 26 Aug, 2021 "),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("button", { className: "button --active" },
                                react_1["default"].createElement(Img_1["default"], { image: active_dot_svg_1["default"] }),
                                "Active")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("div", { className: "container-full", onBlur: function () { return onBlurHandler(); }, onFocus: function () { return onFocusHandler(); } },
                                react_1["default"].createElement("button", { className: "button --elipses", onClick: function () { return onClickHandler(true); }, "aria-haspopup": "true", "aria-expanded": selectedMenu },
                                    react_1["default"].createElement(Img_1["default"], { image: elipses_svg_1["default"] })),
                                selectedMenu !== false && (react_1["default"].createElement("div", { className: "container-full more-info" },
                                    react_1["default"].createElement("div", { className: "container-full more-info__item" },
                                        react_1["default"].createElement("button", { onClick: function () { return showDetailsModal(); } },
                                            react_1["default"].createElement(Img_1["default"], { image: details_icon_svg_1["default"] }),
                                            react_1["default"].createElement(Text_1["default"], { value: "View Details" })))))))),
                    react_1["default"].createElement("tr", { className: "table-row" },
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("input", { type: "checkbox", onChange: function () { } }),
                            react_1["default"].createElement(Img_1["default"], { image: nike_svg_1["default"] })),
                        react_1["default"].createElement("td", { className: "name" },
                            react_1["default"].createElement("div", { className: "company-image" },
                                react_1["default"].createElement("div", { className: "container-full center" },
                                    react_1["default"].createElement(Img_1["default"], { image: amazon_svg_1["default"] }))),
                            react_1["default"].createElement("p", null, "Amazon ")),
                        react_1["default"].createElement("td", null, " AMZ "),
                        react_1["default"].createElement("td", null, " jeff.bezos@amazon.com "),
                        react_1["default"].createElement("td", null, " 26 Aug, 2021 "),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("button", { className: "button --inactive" },
                                react_1["default"].createElement(Img_1["default"], { image: inactive_dot_svg_1["default"] }),
                                "Inactive")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("div", { className: "container-full", onBlur: function () { return onBlurHandler(); }, onFocus: function () { return onFocusHandler(); } },
                                react_1["default"].createElement("button", { className: "button --elipses", onClick: function () { return onClickHandler(true); }, "aria-haspopup": "true", "aria-expanded": selectedMenu },
                                    react_1["default"].createElement(Img_1["default"], { image: elipses_svg_1["default"] }))))))))));
};
exports["default"] = InstitutionsTable;
