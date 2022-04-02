const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, ID, email, github, title = "Engineer") {
        super(name, ID, title);
        this.github = github
    }
}

module.exports = Engineer;
