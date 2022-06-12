"use strict";

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

var proxy = {
  target: 'https://api.paystack.co',
  changeOrigin: true
};

module.exports = function (app) {
  app.use('/transfer', createProxyMiddleware(proxy));
};