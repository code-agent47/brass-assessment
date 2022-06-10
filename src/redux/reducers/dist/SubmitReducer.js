"use strict";
exports.__esModule = true;
var SubmitActionTypes_1 = require("../actions/SubmitActionTypes");
var defaultState = {
    fetching: false,
    results: null
};
var submitReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case SubmitActionTypes_1.SUBMIT_REQUEST:
            return Object.assign({}, state, {
                fetching: true,
                results: null
            });
        case SubmitActionTypes_1.SUBMIT_FAILED:
            return Object.assign({}, state, {
                fetching: false,
                results: null
            });
        case SubmitActionTypes_1.SUBMIT_SUCCESSFUL:
            return Object.assign({}, state, {
                fetching: false,
                results: action.response
            });
        case SubmitActionTypes_1.SUBMIT_CLEAR:
            return Object.assign({}, state, {
                fetching: false,
                results: null
            });
        default:
            return state;
    }
};
exports["default"] = submitReducer;
