import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { USER_LOGIN } from 'store/user'
import { useNavigate } from 'react-router-dom'

import { login } from 'services/userServices'
import { loginValidate } from 'utils/userValidate'
import AuthForm from 'components/authform'
import Loader from 'components/loader'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: ''
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
        validate={loginValidate}
        btnName='Sign In'
        pathName='/signup'
        authText='Create account!'
      />
    </>
  )
}

export default Login
