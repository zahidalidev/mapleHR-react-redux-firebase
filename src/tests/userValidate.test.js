import { validateLogin } from 'utils/userValidate'

test('Return {} when email and password are valid', () => {
  expect(
    validateLogin({
      email: 'za@gmail.com',
      password: '123723j2h'
    })
  ).toEqual({})
})

test('Return { email: "Required", password: "Required" } when email and password are empty', () => {
  expect(
    validateLogin({
      email: '',
      password: ''
    })
  ).toEqual({ email: 'Required', password: 'Required' })
})

test('Return { email: "Invalid email address"} when email format is not correct', () => {
  expect(
    validateLogin({
      email: 'zagmail.com',
      password: '123723j2h'
    })
  ).toEqual({ email: 'Invalid email address' })
})

test('Return { password: "Must be 5 characters or more"} when the length of password is less then 5', () => {
  expect(
    validateLogin({
      email: 'za@gmail.com',
      password: '1234'
    })
  ).toEqual({ password: 'Must be 5 characters or more' })
})
