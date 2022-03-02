import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'

import Button from 'components/button'
import Input from 'components/input'

import 'components/authform/styles.css'

import logo from 'assets/logo.png'

const AuthForm = ({ authText, btnName, initialValues, pathName, submit, validate }) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: submit
  })

  return (
    <div className='form-container'>
      <div className='form-container-div'>
        <div>
          <div className='logo'>
            <img alt='devsinc.png' src={logo} />
            <div>Your Technology Partner</div>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className='form-fields'>
                {Object.keys(formik.values).map(item => (
                  <Input key={item} item={item} formik={formik} />
                ))}
              </div>
              <Button btnName={btnName} />
              <Link to={pathName} className='landing-page-link'>
                {authText}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

AuthForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  authText: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired
}

export default AuthForm
