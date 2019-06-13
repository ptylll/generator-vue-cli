/* eslint-disable camelcase */

"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const _ = require("lodash");
const extend = require("extend");
const mkdirp = require("mkdirp");

const prompts = require("./prompts.js");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stylish ${chalk.red(
          "generator-webpack-example"
        )} generator!`
      )
    );

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        "Your generator must be inside a folder named " +
          this.props.projectName +
          "\n" +
          "I'll automatically create this folder."
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }
  }

  writing() {
    let readmeTmpl = _.template(
      this.fs.read(this.templatePath("./basic/README.md"))
    );
    this.fs.write(
      this.destinationPath("README.md"),
      readmeTmpl({
        project_name: this.props.projectName,
        project_license: this.props.projectLicense,
        project_author: this.props.project_author
      })
    );

    let pkg = this.fs.readJSON(
      this.templatePath("./basic/pacage_tmpl.json"),
      {}
    );
    extend(pkg, {
      dependencies: {
        "@babel/core": "^7.4.3",
        "@babel/plugin-proposal-object-rest-spread": "^7.4.4",
        "@babel/plugin-transform-runtime": "^7.4.4",
        "@babel/preset-env": "^7.4.5",
        "ant-design-vue": "^1.3.8",
        autoprefixer: "^9.5.1",
        axios: "^0.18.0",
        babel: "^6.23.0",
        "babel-core": "^6.26.3",
        "babel-eslint": "^10.0.1",
        "babel-loader": "^8.0.5",
        "babel-plugin-component": "^1.1.1",
        "babel-plugin-dynamic-import-webpack": "^1.1.0",
        "babel-plugin-import": "^1.11.2",
        "babel-preset-env": "^1.7.0",
        "babel-preset-es2015": "^6.24.1",
        "clean-webpack-plugin": "^3.0.0",
        "copy-webpack-plugin": "^5.0.3",
        "css-loader": "^2.1.1",
        "dotenv-webpack": "^1.7.0",
        "eslint-plugin-import": "^2.17.2",
        "eslint-plugin-vue": "^5.2.2",
        "file-loader": "^3.0.1",
        happypack: "^5.0.1",
        "html-webpack-plugin": "^3.2.0",
        "image-webpack-loader": "^4.6.0",
        "mini-css-extract-plugin": "^0.6.0",
        "node-sass": "^4.11.0",
        "optimize-css-assets-webpack-plugin": "^5.0.1",
        "postcss-loader": "^3.0.0",
        "sass-loader": "^7.1.0",
        "style-loader": "^0.23.1",
        "uglifyjs-webpack-plugin": "^2.1.3",
        "url-loader": "^1.1.2",
        vue: "^2.6.10",
        "vue-loader": "^15.7.0",
        "vue-router": "^3.0.6",
        "vue-style-loader": "^4.1.2",
        "vue-template-compiler": "^2.6.10",
        vuex: "^3.1.0",
        webpack: "^4.30.0",
        "webpack-cli": "^3.3.1",
        "webpack-dev-server": "^3.3.1",
        "webpack-merge": "^4.2.1"
      },
      devDependencies: {
        eslint: "^5.16.0",
        "eslint-config-prettier": "^4.2.0",
        "eslint-loader": "^2.1.2",
        "eslint-plugin-prettier": "^3.0.1",
        husky: "^2.2.0",
        "lint-staged": "^8.1.6",
        prettier: "^1.17.0",
        "prettier-eslint-cli": "^4.7.1"
      }
    });

    pkg.keywords = pkg.keywords || [];
    pkg.keywords.push("generator-webpack-vue");

    pkg.name = this.props.projectName;
    pkg.description = this.props.projectDesc;
    pkg.main = this.props.projectMain;
    pkg.author = this.props.projectAuthor;
    pkg.license = this.props.projectLicense;

    this.fs.writeJSON(this.destinationPath("package.json"), pkg);

    mkdirp("config");
    mkdirp("dist");
    mkdirp("src");
    mkdirp("static");
    mkdirp("src/api");
    mkdirp("src/component");
    mkdirp("src/config");
    mkdirp("src/img");
    mkdirp("src/sass");
    mkdirp("src/views");

    // 默认git提交配置
    this.fs.copy(
      this.templatePath("./basic/gitignore_tmpl"),
      this.destinationPath(".gitignore")
    );

    // 默认app.js
    this.fs.copy(
      this.templatePath("./basic/app_tmpl.js"),
      this.destinationPath("app.js")
    );

    // Webpack
    this.fs.copy(
      this.templatePath("./config/webpack.base.js"),
      this.destinationPath("./config/webpack.base.js")
    );
    this.fs.copy(
      this.templatePath("./config/webpack.dev.js"),
      this.destinationPath("./config/webpack.dev.js")
    );
    this.fs.copy(
      this.templatePath("./config/webpack.prod.js"),
      this.destinationPath("./config/webpack.prod.js")
    );

    // Sass默认
    this.fs.copy(
      this.templatePath("./sass/index.scss"),
      this.destinationPath("./src/sass/index.sass")
    );
    this.fs.copy(
      this.templatePath("./sass/rest.scss"),
      this.destinationPath("./src/sass/rest.sass")
    );

    // 路由
    this.fs.copy(
      this.templatePath("./src/router.js"),
      this.destinationPath("./src/router.js")
    );
    // App.vue
    this.fs.copy(
      this.templatePath("./src/app.vue"),
      this.destinationPath("./src/app.vue")
    );

    // 入口index.js
    this.fs.copy(this.templatePath("index.js"), "index.js");

    // 默认config
    this.fs.copy(
      this.templatePath("./src/config/router.config.js"),
      this.destinationPath("./src/config/router.config.js")
    );
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
