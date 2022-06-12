"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var FetchLoadingStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position:relative;\n    //width:100%;\n    .fetch__progress{\n        background:rgba(244, 233, 244,0.21);\n        height:100%;\n        left:0;\n        overflow:hidden;\n        position:absolute;\n        position:fixed;\n        right:0;\n        top:0;\n        z-index:7000;\n    }\n    .fetch__progress__bar{\n        animation:slide-progress-bar 1.1s linear infinite;\n        background: #0BCE5A;\n        height:4px;\n        width:30%;\n        position:absolute;\n        z-index:3000;\n    }\n    @keyframes slide-progress-bar{\n        0%{\n            margin-left:0%;\n            width:30%;\n        }\n        40%{\n            width:60%;\n        }\n        100%{\n            margin-left:100%;\n            width:30%;\n        }\n    }\n"], ["\n    position:relative;\n    //width:100%;\n    .fetch__progress{\n        background:rgba(244, 233, 244,0.21);\n        height:100%;\n        left:0;\n        overflow:hidden;\n        position:absolute;\n        position:fixed;\n        right:0;\n        top:0;\n        z-index:7000;\n    }\n    .fetch__progress__bar{\n        animation:slide-progress-bar 1.1s linear infinite;\n        background: #0BCE5A;\n        height:4px;\n        width:30%;\n        position:absolute;\n        z-index:3000;\n    }\n    @keyframes slide-progress-bar{\n        0%{\n            margin-left:0%;\n            width:30%;\n        }\n        40%{\n            width:60%;\n        }\n        100%{\n            margin-left:100%;\n            width:30%;\n        }\n    }\n"])));
exports["default"] = FetchLoadingStyle;
var templateObject_1;
