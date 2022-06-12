"use strict";
exports.__esModule = true;
var VerifyActionTypes_1 = require("../actions/VerifyActionTypes");
var defaultState = {
    fetching: false,
    results: null
};
var verifyReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case VerifyActionTypes_1.VERIFY_REQUEST:
            return Object.assign({}, state, {
                fetching: true,
                results: null
            });
        case VerifyActionTypes_1.VERIFY_FAILED:
            return Object.assign({}, state, {
                fetching: false,
                results: null
            });
        case VerifyActionTypes_1.VERIFY_SUCCESSFUL:
            return Object.assign({}, state, {
                fetching: false,
                results: action.response
            });
        default:
            return state;
    }
};
exports["default"] = verifyReducer;
