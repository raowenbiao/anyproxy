const AnyProxy = require('anyproxy');
const options = {
  port: 8001,
  rule: require('anyproxy/lib/rule/default.js'),
  webInterface: {
    enable: true,
    webPort: 8002,
    wsPort: 8003,
  },
  throttle: 10000,
  forceProxyHttps: true,
  silent: true,
  dangerouslyIgnoreUnauthorized: true,
};
const proxyServer = new AnyProxy.ProxyServer(options);
proxyServer.start();
