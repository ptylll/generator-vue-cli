const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 拷贝
const CopyWebpackPlugin = require("copy-webpack-plugin");

const resolve = (...arg) => {
  return path.resolve(".", ...arg);
};

module.exports = {
  entry: () => new Promise(resolve => resolve(["./index.js"])),
  module: {
    rules: [
      {
        // 处理js
        test: /\.js$/,
        loader: ["babel-loader", "eslint-loader"],
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        enforce: "pre" // 编译前检查
        // exclude: /node_modules/ // 不检测的文件
        // include: [__dirname + "/src"] // 要检查的目录
      },
      {
        // 处理vue
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        // Sass scss css 处理
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        // 字体
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: "url-loader"
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: "static",
        ignore: [".*"]
      }
    ])
  ],
  resolve: {
    extensions: [".js", ".vue", "sass"],
    alias: {
      "@": resolve("src"),
      vue: "vue/dist/vue.esm.js",
      $component: resolve("./src/component"),
      $api: resolve("./src/api"),
      $views: resolve("./src/views"),
      $img: resolve("./src/img")
    }
  }
};
