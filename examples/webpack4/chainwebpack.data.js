[DEPRECATED] SkeletonPlugin.loader is DEPRECATED now. Hot reload in dev mode is supported already, so you can remove this option.
{
  entry: {
    page1: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src/pages/page1/entry.js',
    page2: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src/pages/page2/entry.js'
  },
  output: {
    path: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/dist',
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[id].js'
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.json'
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ],
        include: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/node_modules/mini-css-extract-plugin/dist/loader.js',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.postcss$/,
        use: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/node_modules/mini-css-extract-plugin/dist/loader.js',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/node_modules/mini-css-extract-plugin/dist/loader.js',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/node_modules/mini-css-extract-plugin/dist/loader.js',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/node_modules/mini-css-extract-plugin/dist/loader.js',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.stylus$/,
        use: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/node_modules/mini-css-extract-plugin/dist/loader.js',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader',
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/node_modules/mini-css-extract-plugin/dist/loader.js',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader',
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        resource: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src/pages/page1/entry.js',
        options: {
          entry: 'skeleton',
          routePathTemplate: '/skeleton',
          importTemplate: 'import [name] from \'./[name].vue\';'
        },
        loader: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/lib/loader.js'
      }
    ]
  },
  devtool: false,
  plugins: [
    {},
    {
      options: {
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[name].css'
      }
    },
    {
      options: {
        template: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src/pages/page1/index.html',
        templateParameters: function () { /* omitted long function */ },
        filename: 'page1.html',
        hash: false,
        inject: true,
        compile: true,
        favicon: false,
        minify: false,
        cache: true,
        showErrors: true,
        chunks: [
          'page1'
        ],
        excludeChunks: [],
        chunksSortMode: 'dependency',
        meta: {},
        title: 'Webpack App',
        xhtml: false
      }
    },
    {
      options: {
        template: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src/pages/page2/index.html',
        templateParameters: function () { /* omitted long function */ },
        filename: 'page2.html',
        hash: false,
        inject: true,
        compile: true,
        favicon: false,
        minify: false,
        cache: true,
        showErrors: true,
        chunks: [
          'page2'
        ],
        excludeChunks: [],
        chunksSortMode: 'dependency',
        meta: {},
        title: 'Webpack App',
        xhtml: false
      }
    },
    {
      options: {
        webpackConfig: {
          entry: {
            page1: '/Users/zhengmeiyu/Documents/ks/vue-skeleton-webpack-plugin/examples/webpack4/src/pages/page1/entry-skeleton.js'
          }
        },
        insertAfter: '<div id="app">',
        quiet: true
      }
    },
    {
      options: {
        inline: {
          test: []
        },
        sync: {
          test: []
        },
        async: {
          test: []
        },
        defer: {
          test: []
        },
        module: {
          test: []
        },
        prefetch: {
          test: [],
          chunks: 'initial'
        },
        preload: {
          test: [],
          chunks: 'initial'
        },
        defaultAttribute: 'async',
        removeInlinedAssets: true,
        custom: []
      }
    }
  ]
}
