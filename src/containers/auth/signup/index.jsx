import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { USER_SIGNUP } from 'store/user'
import { validateUser } from 'utils/userValidate'
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
        validate={validateUser}
        btnName='Sign Up'
        pathName='/login'
        authText='Login!'
      />
    </>
  )
}

export default Signup
