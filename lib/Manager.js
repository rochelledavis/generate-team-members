const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, ID, email, office, title = "Manager") {
        super(name, ID, title);
        this.office = office
    }
}

module.exports = Manager