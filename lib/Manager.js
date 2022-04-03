const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(office, name, ID, email, title = "Manager") {
        super(name, ID, email, title);
        this.office = office;
    }
}

module.exports = Manager