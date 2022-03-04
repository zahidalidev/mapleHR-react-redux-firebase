const validate = require('../utils/userValidate')

const values = {
  email: 'za@gmail.com',
  password: '123723j2h'
}

test('Return {} if email and password are valid', () => {
  expect(validate.validateLogin(values)).toMatchObject({})
})
