# vue-skeleton-webpack-plugin

使用 `vue-server-renderer` 对 skeleton 组件进行渲染，然后将渲染得到的 html 结构 和 style 结构 塞回 入口 html 下。

本插件 直接 clone github 上 lavas 的开源项目 [vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)，具体改动如下：

-   添加 examples/multiple3 的测试入口 和 examples/webpack4 的测试入口
-   修复 skeleton 生成路由 bug

## 依赖

- html-webpack-plugin

## 支持

| 支持 | webpack 3.x | webpack 4.x |
| ------ | ------ | ------ |
| html-webpack-plugin 3.x | ✅ | ✅ |
| html-webpack-plugin 4.x | 🚫 | ✅ |

## 使用

> 你只需做的是 有一个 sleketon-entry 和一个 skeleton 组件。

### config 配置

#### 生成 skeleton

对于 mpa，需要在构建时添加插件，配置如下：

```js
new SkeletonWebpackPlugin({
    webpackConfig: {
        entry: {
            // eg: 参考 examples/webpack4/webpack.config.js 中配置
            // 仅 page1 使用 Skeleton
            // page1: path.join(__dirname, './src/pages/page1/entry-skeleton.js')
            <entryChunkName>: <absolute path of entry skeleton>
        }
    }
})
```

#### 路由调试

```js
SkeletonWebpackPlugin.loader({
    // eg: 参考 examples/webpack4/webpack.config.js 中配置
    // resource: path.join(__dirname, 'src/pages/page1/entry.js'),
    // options: {
    //     entry: 'skeleton',
    //     routePathTemplate: '/skeleton',
    //     importTemplate: 'import [name] from \'./[name].vue\';'
    // }
    resource: <absolute path of entry>
    options: {
        entry: [<entryChunkName>],
        routePathTemplate: '/[name]',
        importTemplate: 'import [name] from \'<relative path of skeleton component>';'
    }
})
```

### chain-webpack

修改 `ks-scripts.config.js` 文件

```js
// 新增 引入
const SkeletonWebpackPlugin = require('@ks/vue-skeleton-webpack-plugin');
```

#### 生成 skeleton

```js
config
    .plugin('vue-skeleton-webpack')
    .use(SkeletonWebpackPlugin, [
        {
            webpackConfig: {
                entry: {
                    'static/pages/account/appeal': path.join(__dirname, './src/pages/account/appeal/entry-skeleton.js')
                }
            }
        }
    ]);
```

#### 路由调试

```js
config.module
    .rule('routerjs')
    .resource(path.join(__dirname, 'src/pages/account/appeal/router.js'))
    .use('skeleton-loader')
    .loader(skeletonRouter.loader)
    .options({
        entry: 'skeleton',
        routePathTemplate: '/skeleton',
        importTemplate: 'import [name] from \'@/components/skeleton.vue\';'
    });
```

## 注意事项

- 不要把 动态生成的 `skeleton` 路由发布到生产环境，应针对 `NODE_ENV` 判断生成

## 安装构建

```bash
$ npm i
$ npm run build
```

## 待优化

- 生成 `skeleton` 路由 支持多入口

## changelog

### 添加 examples/webpack4 的测试入口

```bash
$ npm run webpack4
```

-   skeleton: skeleton 调试路由
-   router1

## ps

Q: 私有库版本号 和 github 开源项目版本号对应关系?

A: 私有库版本号 主版本 +3

Q: changelog 维护的是什么?

A: 私有库的产品迭代进度，[github 开源项目 changelog](https://github.com/lavas-project/vue-skeleton-webpack-plugin/blob/master/CHANGELOG.md)

Q: vue 与 vue-server-renderer 版本不一致 报错

```console
  throw new Error(
  ^

Error:

Vue packages version mismatch:

- vue@2.5.17
- vue-server-renderer@2.5.21

This may cause things to work incorrectly. Make sure to use the same version for both
```

A: 删除 `package-lock.json` 文件，重新 `$ npm i --no-package-lock` 或者直接在 `.npmrc` 中配置 `package-lock=false`
