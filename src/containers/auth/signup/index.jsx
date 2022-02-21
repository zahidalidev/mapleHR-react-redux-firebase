import AuthForm from 'components/authform'
import { useDispatch } from 'react-redux'
import { USER_LOGIN } from 'store/user'

const Signup = () => {
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  const submit = values => {
    dispatch(USER_LOGIN({ email: values.email, password: values.password }))
  }

  return (
    <AuthForm
      initialValues={initialValues}
      submit={submit}
      btnName='Sign Up'
      pathName='/login'
      authText='Login!'
    />
  )
}

export default Signup
