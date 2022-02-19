import { useFormik } from 'formik'

import Form from 'components/form'
import validate from 'utils/validate'

const Signup = () => {
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

  return <Form formik={formik} btnName='Sign Up' pathName='/login' authText='Login!' />
}

export default Signup
