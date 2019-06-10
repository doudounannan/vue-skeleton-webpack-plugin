/**
 * @file skeleton conf
 * @author panyuqi (pyqiverson@gmail.com)
 */

/* eslint-disable fecs-no-require */

'use strict';

const path = require('path');
const utils = require('./utils');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const SkeletonWebpackPlugin = require('../../lib');

function resolve(dir) {
    return path.join(__dirname, dir);
}

let webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            extract: true
        })
        .concat(SkeletonWebpackPlugin.loader({
            resource: resolve('src/pages/page1/entry.js'),
            options: {
                entry: 'skeleton',
                routePathTemplate: '/skeleton',
                importTemplate: 'import [name] from \'./[name].vue\';'
            }
        }))
    },
    devtool: false,
    plugins: [

        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].css')
        }),

        new HtmlWebpackPlugin({
            filename: utils.assetsPath('../page1.html'),
            template: path.join(__dirname, './src/pages/page1/index.html'),
            chunks: ['page1'], // 或者使用 excludeChunks
            // excludeChunks: ['page2'],
            chunksSortMode: 'dependency'
        }),

        new HtmlWebpackPlugin({
            filename: utils.assetsPath('../page2.html'),
            template: path.join(__dirname, './src/pages/page2/index.html'),
            chunks: ['page2'],
            // excludeChunks: ['page1'],
            chunksSortMode: 'dependency'
        }),

        new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                    page1: resolve('./src/pages/page1/entry-skeleton.js')
                }
            },
            quiet: true
        }),

        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async'
        })
    ]
});

module.exports = webpackConfig;
