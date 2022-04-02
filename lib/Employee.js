class Employee {
    constructor(name, ID, email, role = "Employee") {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
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