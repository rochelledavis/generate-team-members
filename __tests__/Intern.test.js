const Intern = require('../lib/Intern');


test('ceates the school name', () => {
    const intern = new Intern("300");

    expect(intern.school).toEqual(expect.any(String));
})