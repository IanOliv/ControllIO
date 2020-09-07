const inquirer = require('inquirer');
const { type } = require('os');

module.exports = {
    askGithubCredentials: () => {
        const questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your GitHub username or e-mail address:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your username or e-mail address.';
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your password.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
    genetareModule:()=>{
        const questions= [{
            name:"name",
            type:"input",
            message:`What's the module name?🤔`,
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return '😅...Insert something with content😉';
                }
            }
        },{
            name:"hasItsOwnEvents",
            type:"input",
            message:"Does this module has it's own events?[Yy/Nn]🤔",
            validate:function(value){
                const valueUpper = value.toUpperCase()
                
                return ((valueUpper === "Y" || valueUpper === "N") ? true : '😅...Insert some valid Input 👉[Yy/Nn]👈')
            }

            }, {
                name: "hasItsOwnJsFile",
                type: "input",
                message: "Does this module has it's js files?[Yy/Nn]🤔",
                validate: function (value) {
                    const valueUpper = value.toUpperCase()

                    return ((valueUpper === "Y" || valueUpper === "N") ? true : '😅...Insert some valid Input 👉[Yy/Nn]👈')
                }

            }]

        return inquirer.prompt(questions);
    }
};