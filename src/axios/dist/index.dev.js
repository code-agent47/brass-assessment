"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  baseURL: 'https://staging.api.evisit.pro',
  headers: {
    // Authorization: `Bearer ${Cookies.get('evstathky')}`,
    'Content-Type': 'application/json',
    evstathky: 'p4wi3mfni35423mddfko00djwive'
  },
  withCredentials: true
});

instance.interceptors.request.use(function _callee(config) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          config.headers = {
            // Authorization: `Bearer ${Cookies.get('evstathky')}`,
            evstathky: 'p4wi3mfni35423mddfko00djwive',
            'Content-Type': 'application/json'
          };
          return _context.abrupt("return", config);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}, function (error) {
  Promise.reject(error);
});
var _default = instance;
exports["default"] = _default;