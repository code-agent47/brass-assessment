"use strict";
exports.__esModule = true;
exports.rootReducer = void 0;
var redux_1 = require("redux");
var AlertReducer_1 = require("./AlertReducer");
var DashboardReducer_1 = require("./DashboardReducer");
var SubmitReducer_1 = require("./SubmitReducer");
exports.rootReducer = redux_1.combineReducers({
    alertReducer: AlertReducer_1["default"],
    dashboardReducer: DashboardReducer_1["default"],
    submitReducer: SubmitReducer_1["default"]
});
