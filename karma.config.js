
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config){
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    reporters: ['dots'],
    singleRun: true,

    browsers: ['Chrome'],
    files: [
      './tests/*.js'
    ],
    preprocessors: {
      './tests/*.js': ['webpack', 'sourcemap'],
    },
    
    webpack: webpackConfig,
    webpackMiddleWare: {
      noInfo: true
    }

  });
};