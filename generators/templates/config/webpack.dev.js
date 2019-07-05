const merge = require("webpack-merge");
const webpack = require('webpack')
const HappyPack = require("happypack")
const os = require('os')
const path = require("path");
const common = require("./webpack.base.js");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "../dist",
    hot: true,
    port: 8088,
    inline: true,
    proxy: {
      "/api": {
        target: "https://api.xxxx.com/",
        pathRewrite: {
          "^/api": "/v2/movie"
        },
        changeOrigin: true
      }
    }
  },
  output: {
    chunkFilename: "js/[id].[hash].[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        //处理png svg jpg gif图片
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader", //图片压缩
            options: {
              limit: 5000,
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": "'development'"
    }),
    new HappyPack({
      id: 'happyBabel',
      loaders: [
        {
          loader: 'babel-loader?cacheDirectory=true'
        }
      ],
      threadPool: happyThreadPool,
      verbose: true
    })
  ],
  mode: "development"
});
