class Employee {
    constructor(name, ID, email, title = "Employee") {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getTitle() {
        return this.title;
    }
}

module.exports = Employee;