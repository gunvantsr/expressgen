#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { join } = require('path');
const currentDir = process.cwd();
const chalk = require('chalk');

const QUESTIONS = [
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else
        return 'Project name may only include letters, numbers, underscores and hashes.';
    },
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectName = answers['project-name'];
  const modelName = answers['model-name'];
  const boilerplatePath = `${__dirname}/boilerplates`;

  fs.mkdirSync(`${currentDir}/${projectName}`);
  fse.copySync(boilerplatePath, projectName);
  createContent(projectName);
});

let createContent = (projectName) => {
  let projectPath = path.join(currentDir, projectName);
  let packageJson = path.join(projectPath, 'package.json');
  let packageObj = fse.readJsonSync(packageJson);
  packageObj.name = projectName;
  fs.writeFileSync(packageJson, JSON.stringify(packageObj));
  welcomeMsg(projectName);
};

let welcomeMsg = (projectName) => {
  console.log(
    chalk.yellow(
      `Yay! we have created all the files to get started for your ${projectName}! 🚀`
    )
  );
  console.log(chalk.yellow(`cd ${projectName}`));
  console.log(chalk.blue(`Happy Coding!! ❤️`));
};
