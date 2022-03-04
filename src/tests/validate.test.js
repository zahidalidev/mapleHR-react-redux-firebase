const sum = require('../utils/userValidate')

test('adds 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
