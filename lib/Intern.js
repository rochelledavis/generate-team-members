const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(school, name, ID, email, title = "Intern") {
        super(name, ID, title);
        this.school = school
    }
}

module.exports = Intern;