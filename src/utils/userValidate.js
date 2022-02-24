export const validateUser = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.title) {
    errors.title = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.contact) {
    errors.contact = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }

  if (values.password != values.confirmPassword) {
    errors.confirmPassword = 'Password and Confirm Password not same!'
  }

  return errors
}

export const loginValidate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }

  return errors
}
