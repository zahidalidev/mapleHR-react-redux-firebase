import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import burgerTotalPrice from 'utils/burgerTotalPrice'

import { Backdrop, ModalWrapper } from 'components/modal/styles'
import { DangerButton, Heading3, SuccessButton } from 'sharedStyle'

function Modal({ handleModal }) {
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const ingredients = useSelector(state => state.ingredients)

  useEffect(() => {
    setCurrentTotalPrice(burgerTotalPrice(ingredients))
  }, [ingredients])

  return (
    <>
      <Backdrop></Backdrop>
      <ModalWrapper>
        <Heading3>Your Order Summary:</Heading3>
        <ul>
          {ingredients.map(item => (
            <li key={item.name}>
              <span>{item.name}</span>: {item.quantity}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total Price: {`$${currentTotalPrice}`}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <DangerButton onClick={() => handleModal(false)}>CANCEL</DangerButton>
        <SuccessButton onClick={() => handleModal(true)}>CONTINUE</SuccessButton>
      </ModalWrapper>
    </>
  )
}

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired
}

export default Modal
