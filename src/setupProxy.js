const createProxyMiddleware = require('http-proxy-middleware');
// const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://10.0.4.34:8110/api',
            changeOrigin: true,
            // pathRewrite: {
            //     '^/api': ''
            // },
            // "secure": false,//配置关闭证书签名验证 故遇到跨域配置时应给每个target设置
        })
    );
};