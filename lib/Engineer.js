const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(github, name, ID, email, title = "Engineer") {
        super(name, ID, title);
        this.github = github
    }
}

module.exports = Engineer;
