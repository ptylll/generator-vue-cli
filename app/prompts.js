module.exports = [
  {
    type: "input",
    name: "projectName",
    message: "Please input project name (generator-webpack-vue):",
    default: "generator-webpack-example"
  },
  {
    type: "input",
    name: "projectDesc",
    message: "Please input project description:"
  },
  {
    type: "input",
    name: "projectMain",
    message: "Main file (app.js):",
    default: "app.js"
  },
  {
    type: "input",
    name: "projectAuthor",
    message: "Author (pty):",
    default: "pty"
  },
  {
    type: "list",
    name: "projectLicense",
    message: "Please choose license:",
    choices: ["MIT", "ISC", "Apache-2.0", "AGPL-3.0"]
  },
  {
    type: "confirm",
    name: "someAnswer",
    message: "Would you like to enable this option?",
    default: true
  }
];
