import PropTypes from 'prop-types'

import 'components/button/styles.css'

const Button = ({ btnName }) => {
  return (
    <div className='sign-in-form-button'>
      <button className='landing-page-button' type='submit'>
        {btnName}
      </button>
    </div>
  )
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired
}

export default Button
