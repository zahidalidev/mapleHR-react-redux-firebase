import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { useSelector } from 'react-redux'

import IngredientButton from 'components/ingredientButton'
import { FooterWrapper, OrderButton } from 'components/footer/styles'
import burgerTotalPrice from 'utils/burgerTotalPrice'

const Footer = ({ handleOrder }) => {
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const user = useSelector(state => state.user)
  const ingredients = useSelector(state => state.ingredients)

  const isOrderActive = currentTotalPrice > 3
  const orderBtnLable = _.isEmpty(user) ? 'Sign up to order' : 'Order now'

  useEffect(() => {
    setCurrentTotalPrice(burgerTotalPrice(ingredients))
  }, [ingredients])

  return (
    <FooterWrapper>
      <p>
        Current price: <strong>{`$${currentTotalPrice}`}</strong>
      </p>

      {ingredients.map((item, index) => (
        <IngredientButton key={item.id.toString()} index={index} item={item} />
      ))}

      <OrderButton disabled={!isOrderActive} onClick={handleOrder}>
        {orderBtnLable}
      </OrderButton>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  handleOrder: PropTypes.func.isRequired
}

export default Footer
