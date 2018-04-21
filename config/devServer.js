'use strict';

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function() {
  return {
    port: '8091',
    noInfo: true,
    hot: true,
    host: host,
    https: protocol === 'https',
    historyApiFallback: true,
    inline: true,
    compress: false,
    proxy: {
      // context: ['/proxy/**'],
      // target: 'http://beta-pics.jd.com/',
      // changeOrigin: true,
      // withCredentials: true,
      // secure: false, // https
    }
  };
};
