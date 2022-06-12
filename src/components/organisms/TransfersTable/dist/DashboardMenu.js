"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Text_1 = require("../../atoms/Text/Text");
var Img_1 = require("../../atoms/Image/Img");
var react_router_dom_1 = require("react-router-dom");
var DashboardMenuStyle_1 = require("./DashboardMenuStyle");
var institutions_active_svg_1 = require("../../../assets/images/institutions-active.svg");
var disbursement_svg_1 = require("../../../assets/images/disbursement.svg");
var user_mgt_svg_1 = require("../../../assets/images/user-mgt.svg");
var activity_log_svg_1 = require("../../../assets/images/activity-log.svg");
var reports_svg_1 = require("../../../assets/images/reports.svg");
var settings_svg_1 = require("../../../assets/images/settings.svg");
var DashboardMenu = function () {
    return (react_1["default"].createElement(DashboardMenuStyle_1["default"], null,
        react_1["default"].createElement("div", { className: "container-full dashboard-menu" },
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/institutions", className: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? "active" : undefined;
                } },
                react_1["default"].createElement("div", { className: "container-full dashboard-menu__item" },
                    react_1["default"].createElement(Img_1["default"], { image: institutions_active_svg_1["default"], className: "--active" }),
                    react_1["default"].createElement(Img_1["default"], { image: institutions_active_svg_1["default"], className: "--inactive" }),
                    react_1["default"].createElement(Text_1["default"], { value: "Institutions" }))),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/disbursements", className: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? "active" : undefined;
                } },
                react_1["default"].createElement("div", { className: "container-full dashboard-menu__item" },
                    react_1["default"].createElement(Img_1["default"], { image: disbursement_svg_1["default"], className: "--active" }),
                    react_1["default"].createElement(Img_1["default"], { image: disbursement_svg_1["default"], className: "--inactive" }),
                    react_1["default"].createElement(Text_1["default"], { value: "Disbursements" }))),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/user-management", className: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? "active" : undefined;
                } },
                react_1["default"].createElement("div", { className: "container-full dashboard-menu__item" },
                    react_1["default"].createElement(Img_1["default"], { image: user_mgt_svg_1["default"], className: "--active" }),
                    react_1["default"].createElement(Img_1["default"], { image: user_mgt_svg_1["default"], className: "--inactive" }),
                    react_1["default"].createElement(Text_1["default"], { value: "User Management" }))),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/activity-log", className: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? "active" : undefined;
                } },
                react_1["default"].createElement("div", { className: "container-full dashboard-menu__item" },
                    react_1["default"].createElement(Img_1["default"], { image: activity_log_svg_1["default"], className: "--active" }),
                    react_1["default"].createElement(Img_1["default"], { image: activity_log_svg_1["default"], className: "--inactive" }),
                    react_1["default"].createElement(Text_1["default"], { value: "Activity Log" }))),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/reports", className: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? "active" : undefined;
                } },
                react_1["default"].createElement("div", { className: "container-full dashboard-menu__item" },
                    react_1["default"].createElement(Img_1["default"], { image: reports_svg_1["default"], className: "--active" }),
                    react_1["default"].createElement(Img_1["default"], { image: reports_svg_1["default"], className: "--inactive" }),
                    react_1["default"].createElement(Text_1["default"], { value: "Reports" }))),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/settings", className: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? "active" : undefined;
                } },
                react_1["default"].createElement("div", { className: "container-full dashboard-menu__item" },
                    react_1["default"].createElement(Img_1["default"], { image: settings_svg_1["default"], className: "--active" }),
                    react_1["default"].createElement(Img_1["default"], { image: settings_svg_1["default"], className: "--inactive" }),
                    react_1["default"].createElement(Text_1["default"], { value: "Settings" }))))));
};
exports["default"] = DashboardMenu;
