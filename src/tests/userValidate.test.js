const validate = require('../utils/userValidate')

test('Return {} when email and password are valid', () => {
  expect(
    validate.validateLogin({
      email: 'za@gmail.com',
      password: '123723j2h'
    })
  ).toEqual({})
})

test('Return { email: "Required", password: "Required" } when email and password are empty', () => {
  expect(
    validate.validateLogin({
      email: '',
      password: ''
    })
  ).toEqual({ email: 'Required', password: 'Required' })
})

test('Return { email: "Invalid email address"} when email format is not correct', () => {
  expect(
    validate.validateLogin({
      email: 'zagmail.com',
      password: '123723j2h'
    })
  ).toEqual({ email: 'Invalid email address' })
})

test('Return { password: "Must be 5 characters or more"} when the length of password is less then 5', () => {
  expect(
    validate.validateLogin({
      email: 'za@gmail.com',
      password: '1234'
    })
  ).toEqual({ password: 'Must be 5 characters or more' })
})
