import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { USER_SIGNUP } from 'store/user'
import { signup } from 'services/userServices'
import AuthForm from 'components/authform'
import Loader from 'components/loader'

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  const submit = async values => {
    try {
      setLoading(true)
      const user = await signup(values.email, values.password)
      dispatch(USER_SIGNUP({ token: user.email }))
      navigate('/people')
    } catch (error) {
      console.log('signup Error: ', error)
    }
    setLoading(false)
  }
  return (
    <>
      <Loader show={loading} />
      <AuthForm
        initialValues={initialValues}
        submit={submit}
        btnName='Sign Up'
        pathName='/login'
        authText='Login!'
      />
    </>
  )
}

export default Signup
