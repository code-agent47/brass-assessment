"use strict";
exports.__esModule = true;
var AuthActionTypes_1 = require("../actions/AuthActionTypes");
var defaultState = {
    fetching: false,
    results: null
};
var signinReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case AuthActionTypes_1.AUTH_REQUEST:
            return Object.assign({}, state, {
                fetching: true,
                results: null
            });
        case AuthActionTypes_1.AUTH_FAILED:
            return Object.assign({}, state, {
                fetching: false,
                results: null
            });
        case AuthActionTypes_1.AUTH_USER:
            return Object.assign({}, state, {
                fetching: false,
                results: action.response
            });
        default:
            return state;
    }
};
exports["default"] = signinReducer;
