const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://api.paystack.co',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/transfer',
    createProxyMiddleware(proxy)
  );
};