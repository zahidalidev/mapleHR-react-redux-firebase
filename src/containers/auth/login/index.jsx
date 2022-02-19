import { useFormik } from 'formik'

import Form from 'components/form'
import validate from 'utils/validate'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }
  })

  return <Form formik={formik} btnName='Sign In' pathName='/signup' authText='Create account!' />
}

export default Login
