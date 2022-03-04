import PropTypes from 'prop-types'

import 'components/input/styles.css'

const Input = ({ formik, item }) => {
  const error = formik.errors[item]

  return (
    <div className='input-wrapper'>
      <input
        name={item}
        onChange={formik.handleChange}
        value={formik.values[item]}
        type={item === 'password' ? 'confirm password' : item}
        placeholder={item === 'confirmPassword' ? 'confirm password' : item}
        autoComplete={item}
        className={`input-field ${error && 'field-error'}`}
      />
      {error && <div className='validation-error'>{error}!</div>}
    </div>
  )
}

Input.propTypes = {
  item: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired
}

export default Input
