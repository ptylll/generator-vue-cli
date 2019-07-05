"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-vue-webpack-cli:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/index.js"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file(["src"]);
    assert.file(["config"]);
    assert.file([".babelrc"]);
    assert.file([".gitignore"]);
    assert.file([".eslintrc.js"]);
    assert.file(["postcss.config.js"]);
    assert.file(["index.html"]);
    assert.file(["README.md"]);
    assert.file(["package.json"]);
  });
});
