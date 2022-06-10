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
var StepActionTypes_1 = require("../actions/StepActionTypes");
var defaultState = {
    results: {
        stepOne: {
            company_name: '',
            company_email: '',
            company_website: '',
            company_phone: '',
            company_address: '',
            size_id: '1-50'
        },
        stepTwo: {
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
        }
    }
};
var stepReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case StepActionTypes_1.STEP_1:
            return __assign(__assign({}, state), { results: __assign(__assign({}, state.results), { stepOne: action.data }) });
        case StepActionTypes_1.STEP_2:
            return __assign(__assign({}, state), { results: __assign(__assign({}, state.results), { stepTwo: action.data }) });
        case StepActionTypes_1.STEP_2:
            return __assign(__assign({}, state), { results: __assign(__assign({}, state.results), { stepTwo: action.data }) });
        case StepActionTypes_1.STEP_CLEAR:
            return __assign(__assign({}, state), { results: {
                    stepOne: {
                        company_name: '',
                        company_email: '',
                        company_website: '',
                        company_phone: '',
                        company_address: '',
                        size_id: '1-50'
                    },
                    stepTwo: {
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: ''
                    }
                } });
        default:
            return state;
    }
};
exports["default"] = stepReducer;
