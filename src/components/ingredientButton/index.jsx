import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from 'store/ingredients'
import { ButtonWrapper, Label, LessButton, MoreButton } from 'components/ingredientButton/styles'

const IngredientButton = ({ item, index }) => {
  const dispatch = useDispatch()

  const isDisable = item => item.quantity === 0

  const addIngredient = index => {
    dispatch(ADD_INGREDIENT({ id: index }))
  }

  const removeIngredient = index => {
    dispatch(REMOVE_INGREDIENT({ id: index }))
  }

  return (
    <ButtonWrapper>
      <Label className='BuildControl Label'>{item.name}</Label>
      <LessButton onClick={() => removeIngredient(index)} disabled={isDisable(item)}>
        Less
      </LessButton>
      <MoreButton onClick={() => addIngredient(index)}>More</MoreButton>
    </ButtonWrapper>
  )
}

IngredientButton.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default IngredientButton
