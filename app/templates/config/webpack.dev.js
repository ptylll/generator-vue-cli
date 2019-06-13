const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const path = require("path");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "../dist",
    hot: true,
    port: 8081,
    inline: true,
    proxy: {
      "/api": {
        target: "https://api.douban.com/",
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
        // 处理png svg jpg gif图片
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader", // 图片压缩
            options: {
              limit: 5000,
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  mode: "development"
});
