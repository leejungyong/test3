'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
//todo 

const devConfig = require('./config.dev.js');
const cdnConfig = require('./cdn.config.js');

function getCdnPath(){
  return cdnConfig[process.env.NODE_ENV];
}

module.exports = {
  dev: devConfig,

  build: {
    // Template for index.html
    // index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    //此处应当根据不同环境 配置不同的路径  测试和正式环境配置对应的CDN地址
    assetsPublicPath:  getCdnPath()+'fe_mobile/dist/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
