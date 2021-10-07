#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const fse = require("fs-extra");
const path = require('path');

const currentDir = process.cwd();

const QUESTIONS = [
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }

];


inquirer.prompt(QUESTIONS)
  .then(answers => {
      const projectName = answers['project-name'];
      const modelName = answers['model-name']
      const boilerplatePath = `${__dirname}/boilerplates`;

      fs.mkdirSync(`${currentDir}/${projectName}`);
      fse.copySync(boilerplatePath, projectName);
      createContent(projectName);
    });


    let createContent = (projectName) => {
      let packageJson = `./${projectName}/package.json`;
      let pathName = path.join(__dirname,packageJson);
      let packageObjet = fse.readJsonSync(packageJson);
      packageObjet.name = projectName;
      fs.writeFileSync(pathName, JSON.stringify(packageObjet));
      
      welcomeMsg(projectName);
    }


let welcomeMsg = (projectName) => {
  console.log(`Hola! we had created all the files to get started for your ${projectName} 🚀🚀🚀`)
}