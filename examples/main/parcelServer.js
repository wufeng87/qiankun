const ParcelProxyServer = require('parcel-proxy-server');

// 之前的script
// "start": "parcel index.html --port 7099",

// configure the proxy server
const server = new ParcelProxyServer({
  entryPoint: 'index.html',
  parcelOptions: {
    // provide parcel options here
    // these are directly passed into the
    // parcel bundler
    //
    // More info on supported options are documented at
    // https://parceljs.org/api
    // https: true
    http: false,
  },
  proxies: {
    // add proxies here
    // '/api': {
    //   target: 'http://192.168.2.172:8080'
    // }
    '/fssc': {
      target: 'http://192.168.2.172:8080',
    },
  },
});

// the underlying parcel bundler is exposed on the server
// and can be used if needed
server.bundler.on('buildEnd', () => {
  console.log('Build completed!');
});

// start up the server
server.listen(7099, () => {
  console.log('Parcel proxy server has started');
});
