const Config = require('webpack-chain');

const configFactory = require('./webpack.config.js');

console.log(Config.toString(configFactory));