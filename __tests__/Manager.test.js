
const Manager = require('../lib/Manager');


test('ceates the office number', () => {
    const manager = new Manager("300");

    expect(manager.office).toEqual(expect.any(String));
})