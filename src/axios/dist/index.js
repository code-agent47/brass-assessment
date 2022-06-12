"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var instance = axios_1["default"].create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + process.env.REACT_APP_SECRET_KEY
    }
});
exports["default"] = instance;
