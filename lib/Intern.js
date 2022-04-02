const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, ID, email, school, title = "Intern") {
        super(name, ID, title);
        this.office = office
    }
}

module.exports = Intern;