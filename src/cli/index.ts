#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const questions = require('./lib/questions');
const CLI = require('clui');
const File = require('./lib/files');

const Spinner = CLI.Spinner;
const status = new Spinner('Authenticating you, please wait...');


(async (args)=>{



    clear();

    console.log(
        chalk.yellow(
            figlet.textSync('ctrIO', { horizontalLayout: 'full', width: 80 })
        )
    );




    console.log(chalk.red(figlet.textSync('--cli', { horizontalLayout: 'full', width: 40 })))

    
    
    const credentials = await questions.genetareModule();

    new File(credentials)
    console.log(credentials);
    
    









})(this)

