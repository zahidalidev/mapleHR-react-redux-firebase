import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { USER_LOGIN } from 'store/user'
import { useNavigate } from 'react-router-dom'

import AuthForm from 'components/authform'
import Loader from 'components/loader'
import { login } from 'services/userServices'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: ''
  }

  const validate = values => {
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

  const submit = async values => {
    try {
      setLoading(true)
      const { user } = await login(values.email, values.password)
      dispatch(USER_LOGIN({ token: user.email }))
      navigate('/people')
    } catch (error) {
      console.log('Login Error: ', error)
    }
    setLoading(false)
  }

  return (
    <>
      <Loader show={loading} />
      <AuthForm
        initialValues={initialValues}
        submit={submit}
        validate={validate}
        btnName='Sign In'
        pathName='/signup'
        authText='Create account!'
      />
    </>
  )
}

export default Login
