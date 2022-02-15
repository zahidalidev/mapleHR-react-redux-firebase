import PropsTypes from 'prop-types'

import { Typography } from 'components/input/styles'
import { InputWrapper, InputField } from 'sharedStyle'

const Input = ({ item, handleChange, index }) => {
  return (
    <InputWrapper>
      <InputField
        invalid={item.error}
        type={item.type}
        placeholder={item.placeHolder}
        value={item.value}
        onChange={e => handleChange(index, e.target.value)}
      />
      {item.error ? <Typography>Please enter a valid </Typography> : null}
    </InputWrapper>
  )
}

Input.propTypes = {
  item: PropsTypes.object.isRequired,
  handleChange: PropsTypes.func.isRequired,
  index: PropsTypes.number.isRequired
}

export default Input
