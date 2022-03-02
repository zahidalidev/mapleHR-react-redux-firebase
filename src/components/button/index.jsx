import MuiButton from '@mui/material/Button'
import PropTypes from 'prop-types'

import 'components/button/styles.css'

const Button = ({ btnName, backgroundColor = '#00b8b0' }) => {
  return (
    <div className='sign-in-form-button'>
      <MuiButton
        style={{ backgroundColor }}
        className='landing-page-button'
        type='submit'
        variant='contained'
        data-flag={btnName}
      >
        {btnName}
      </MuiButton>
    </div>
  )
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

export default Button
