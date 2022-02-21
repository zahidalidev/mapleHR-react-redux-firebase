import AuthForm from 'components/authform'

const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  const submit = values => {
    console.log(values)
  }

  return (
    <AuthForm
      initialValues={initialValues}
      submit={submit}
      btnName='Sign In'
      pathName='/signup'
      authText='Create account!'
    />
  )
}

export default Login
