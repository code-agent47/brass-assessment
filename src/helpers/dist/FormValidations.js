"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.isAccountNumberFieldValid = exports.isOTPFieldValid = exports.isAmountFieldValid = void 0;
var axios_1 = require("../axios");
exports.isAmountFieldValid = function (value) {
    var errorMsg;
    if (value !== "") {
        errorMsg = false;
        if (isAmountValid(value)) {
            errorMsg = false;
        }
        else {
            errorMsg = "Enter a valid amount between the range of 100 to 10,000,000";
        }
    }
    else {
        errorMsg = "Field cannot be left blank";
    }
    return errorMsg;
};
function isAmountValid(value) {
    var nameRegEX = /^[0-9]+$/;
    if (value.match(nameRegEX)) {
        if (Number(value) >= 100 && Number(value) <= 10000000) {
            return true;
        }
    }
    return false;
}
exports.isOTPFieldValid = function (value) {
    var errorMsg;
    if (value !== "") {
        errorMsg = false;
        if (isOTPValid(value)) {
            errorMsg = false;
        }
        else {
            errorMsg = "Enter a valid OTP range";
        }
    }
    else {
        errorMsg = "Field cannot be left blank";
    }
    return errorMsg;
};
function isOTPValid(value) {
    var nameRegEX = /^[0-9]+$/;
    if (value.match(nameRegEX)) {
        if (value.length === 6) {
            return true;
        }
    }
    return false;
}
exports.isAccountNumberFieldValid = function (value, code) { return __awaiter(void 0, void 0, void 0, function () {
    var errorMsg, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(value !== "")) return [3 /*break*/, 2];
                errorMsg = false;
                return [4 /*yield*/, isAccountNumberValid(value, code)];
            case 1:
                response = _a.sent();
                if (response) {
                    errorMsg = false;
                }
                else {
                    errorMsg = "Enter a valid account number, make sure you've selected the correct bank";
                }
                return [3 /*break*/, 3];
            case 2:
                errorMsg = "Field cannot be left blank";
                _a.label = 3;
            case 3:
                console.log(errorMsg);
                return [2 /*return*/, errorMsg];
        }
    });
}); };
function isAccountNumberValid(value, code) {
    return __awaiter(this, void 0, void 0, function () {
        var nameRegEX, responseStatus, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nameRegEX = /^[0-9]+$/;
                    if (!value.match(nameRegEX)) return [3 /*break*/, 5];
                    if (!(value.length === 10)) return [3 /*break*/, 5];
                    responseStatus = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, axios_1["default"].get("/bank/resolve?account_number=" + value + "&bank_code=" + code)];
                case 2:
                    response = _a.sent();
                    if (response) {
                        responseStatus = response.data.status;
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    responseStatus = false;
                    return [3 /*break*/, 5];
                case 4: return [2 /*return*/, responseStatus];
                case 5: return [2 /*return*/, false];
            }
        });
    });
}
