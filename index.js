const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./src/generateTeam');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];


const employeeQuestions = () => {
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
            choices: ['Yes, add an engineer', 'Yes, add an intern', `No, I'm done adding employees`],
        },
    ])
    .then(({name, ID, email, office, add, title }) => {
        teamArray.push(new Manager(name, ID, email, office, add, title ));
        console.log('teamArray = ', teamArray)
        if (add === 'Yes, add an engineer') {
            engineerQuestions();
        } else if (add === 'Yes, add an intern') {
            internQuestions();
        } else {
            generateHTML(teamArray);
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
            choices: ['Yes, add an engineer', 'Yes, add an intern', `No, I'm done adding employees`],
        },
    ])
    .then(({name, ID, email, github, add, title }) => {
        teamArray.push(new Engineer(name, ID, email, github, add, title ));
        console.log('teamArray = ', teamArray)
        if (add === 'Yes, add an engineer') {
            engineerQuestions();
        } else if (add === 'Yes, add an intern') {
            internQuestions();
        } else {
            generateHTML(teamArray);
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
    ])
    .then(({name, ID, email, school, add, title }) => {
        teamArray.push(new Intern(name, ID, email, school, add, title ));
        console.log('teamArray = ', teamArray)
        if (add === 'Yes, add an engineer') {
            engineerQuestions();
        } else if (add === 'Yes, add an intern') {
            internQuestions();
        } else {
            generateHTML(teamArray);
        }
    })
}

const generateHTML = (teamArrayPlaceholder) => {
    const html = generateHTML(teamArrayPlaceholder);
    fs.writeFile('./src/index.html', html, function (err) {
        if (err) throw err;
        console.log('Your HTML file has been created!');
    });
};

employeeQuestions();