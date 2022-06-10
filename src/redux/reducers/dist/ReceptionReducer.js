"use strict";
exports.__esModule = true;
var ReceptionActionTypes_1 = require("../actions/ReceptionActionTypes");
var defaultState = {
    fetching: false,
    results: null
};
var ReceptionReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case ReceptionActionTypes_1.RECEPTION_REQUEST:
            return Object.assign({}, state, {
                fetching: true,
                results: null
            });
        case ReceptionActionTypes_1.RECEPTION_FAILED:
            return Object.assign({}, state, {
                fetching: false,
                results: null
            });
        case ReceptionActionTypes_1.RECEPTION_SUCCESSFUL:
            return Object.assign({}, state, {
                fetching: false,
                results: action.response
            });
        case ReceptionActionTypes_1.RECEPTION_CLEAR:
            return Object.assign({}, state, {
                fetching: false,
                results: null
            });
        default:
            return state;
    }
};
exports["default"] = ReceptionReducer;
