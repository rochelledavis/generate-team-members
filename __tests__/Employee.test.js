const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee("rochelle", '123', 'me@me.com', 'Manager');
    expect(employee.name).toEqual(expect.any(String));
});

test("create a name property", () => {
    const employee = new Employee("rochelle", '123', 'me@me.com', 'Manager');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("create an ID property", () => {
    const employee = new Employee("rochelle", '123', 'me@me.com', 'Manager');
    expect(employee.getId()).toEqual(expect.any(String));
});

test("create an email property", () => {
    const employee = new Employee("rochelle", '123', 'me@me.com', 'Manager');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("create an role property", () => {
    const employee = new Employee("rochelle", '123', 'me@me.com', 'Manager');
    expect(employee.getRole()).toEqual(expect.any(String));
});