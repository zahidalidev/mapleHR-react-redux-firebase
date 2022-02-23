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
    name: '',
    title: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  }

  const validate = values => {
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

  const submit = async values => {
    const { name, title, email, contact, password } = values
    const image = 'https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png'
    try {
      setLoading(true)
      const user = await signup(name, title, email, contact, password, image)
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
        validate={validate}
        btnName='Sign Up'
        pathName='/login'
        authText='Login!'
      />
    </>
  )
}

export default Signup
