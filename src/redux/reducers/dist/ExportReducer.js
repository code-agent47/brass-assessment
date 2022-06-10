"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var ExportActionTypes_1 = require("../actions/ExportActionTypes");
var defaultState = {
    results: {
        data: []
    }
};
var exportReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case ExportActionTypes_1.EXPORT:
            return __assign(__assign({}, state), { results: __assign(__assign({}, state.results), { data: action.data }) });
        case ExportActionTypes_1.EXPORT_CLEAR:
            return {
                results: {
                    data: []
                }
            };
        default:
            return state;
    }
};
exports["default"] = exportReducer;
