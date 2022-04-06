const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./src/generateTeam');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];


const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the manager's name?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the manager's name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: `What is the manager's employee ID?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the manager's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the manager's email?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the manager's email!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: `What is the manager's office number?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the manager's office number!`);
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', `No, I'm done adding employees`],
        },
    ])
    .then(({name, ID, email, office, add}) => {
        teamArray.push(new Manager(office, name, ID, email, add,));
        console.log('teamArray = ', teamArray)
        if (add === 'Engineer') {
            engineerQuestions();
        } else if (add === 'Intern') {
            internQuestions();
        } else {
            writeToFile(teamArray);
        }
    })
}



const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the engineer's name?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the engineer's name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: `What is the engineer's employee ID?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the engineer's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the engineer's email?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the engineer's email!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's GitHub username?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the engineer's GitHub username!`);
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', `No, I'm done adding employees`],
        },
    ])
    .then(({name, ID, email, github, add}) => {
        teamArray.push(new Engineer(github, name, ID, email, add));
        console.log('teamArray = ', teamArray)
        if (add === 'Engineer') {
            engineerQuestions();
        } else if (add === 'Intern') {
            internQuestions();
        } else {
            writeToFile(teamArray);
        }
    })
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the intern's name?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the intern's name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: `What is the intern's employee ID?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the intern's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the intern's email?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the intern's email!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `What is the intern's school name?`,
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log(`Please enter the intern's school name!`);
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', `No, I'm done adding employees`],
        },
    ])
    .then(({name, ID, email, school, add}) => {
        teamArray.push(new Intern(school, name, ID, email, add));
        console.log('teamArray = ', teamArray)
        if (add === 'Engineer') {
            engineerQuestions();
        } else if (add === 'Intern') {
            internQuestions();
        } else {
            writeToFile(teamArray);
        }
    })
}

const writeToFile = teamArray => {

    fs.writeFile('./dist/index.html', generateTeam(teamArray), err => {
        if (err) {
            console.log(err);
            return;
        } else {
        console.log('Your HTML file has been created!');
        }
    })
};

managerQuestions();