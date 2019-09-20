/**
 * Created by yang on 2019/9/20.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   mode: 'production'
});