const Engineer = require('../lib/Engineer');


test('ceates the github property', () => {
    const engineer = new Engineer("300");

    expect(engineer.github).toEqual(expect.any(String));
})