/* eslint-disable camelcase */

"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
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
    this.log("\nWiriting...\n");
    this._writPackageJson();
    this._writReadme();
    this._writBabelrc();
    this._writGitignore();
    this._writEslintignore();
    this._writWebpack();
    this._writSass();
    this._writRoute();
    this._writIndex();
    this._writpostcssConfig();
    this._writSrc();
    this._writHtml();
    this._writStatic();
  }

  _writPackageJson() {
    // Package.json
    this.fs.copy(
      this.templatePath("./basic/package_tmpl.json"),
      this.destinationPath("package.json"),
      {
        name: this.props.name,
        description: this.props.description,
        keywords: this.props.keywords,
        author: this.props.author,
        email: this.props.email,
        repository: this.props.repository
      }
    );
  }

  _writReadme() {
    // Readme
    this.fs.copy(
      this.templatePath("./basic/README.md"),
      this.destinationPath("README.md"),
      {
        name: this.props.name,
        description: this.props.description,
        keywords: this.props.keywords,
        author: this.props.author,
        email: this.props.email,
        repository: this.props.repository
      }
    );
  }

  _writBabelrc() {
    // Babel
    this.fs.copy(
      this.templatePath("./basic/.babelrc"),
      this.destinationPath(".babelrc")
    );
  }

  _writGitignore() {
    // 默认git提交配置
    this.fs.copy(
      this.templatePath("./basic/gitignore_tmpl"),
      this.destinationPath(".gitignore")
    );
  }

  _writEslintignore() {
    this.fs.copy(
      this.templatePath("./.eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
  }

  _writWebpack() {
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
  }

  _writSass() {
    // Sass默认
    this.fs.copy(
      this.templatePath("./src/sass/index.scss"),
      this.destinationPath("./src/sass/index.scss")
    );
    this.fs.copy(
      this.templatePath("./src/sass/rest.scss"),
      this.destinationPath("./src/sass/rest.scss")
    );
  }

  _writRoute() {
    // 路由
    this.fs.copy(
      this.templatePath("./src/router.js"),
      this.destinationPath("./src/router.js")
    );
  }

  _writIndex() {
    // 入口index.js
    this.fs.copy(this.templatePath("index.js"), "index.js");
  }

  _writpostcssConfig() {
    this.fs.copy(
      this.templatePath("./postcss.config.js"),
      this.destinationPath("./postcss.config.js")
    );
  }

  _writSrc() {
    this.fs.copy(
      this.templatePath("./src/component/com.vue"),
      this.destinationPath("./src/component/com.vue")
    );
    this.fs.copy(
      this.templatePath("./src/config/router.config.js"),
      this.destinationPath("./src/config/router.config.js")
    );
    this.fs.copy(
      this.templatePath("./src/views/index.vue"),
      this.destinationPath("./src/views/index.vue")
    );
    this.fs.copy(
      this.templatePath("./src/api/api.js"),
      this.destinationPath("./src/api/api.js")
    );
    this.fs.copy(
      this.templatePath("./src/app.vue"),
      this.destinationPath("./src/app.vue")
    );
    this.fs.copy(
      this.templatePath("./src/router.js"),
      this.destinationPath("./src/router.js")
    );
  }

  // 静态文件夹
  _writStatic() {
    this.fs.copy(
      this.templatePath("./static/logo.png"),
      this.destinationPath("./static/logo.png")
    );
  }

  _writHtml() {
    this.fs.copy(
      this.templatePath("./index.html"),
      this.destinationPath("./index.html")
    );
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
