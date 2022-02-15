import { useSelector } from 'react-redux'

import { IngredientDiv } from 'components/ingredient/styles'

const Ingredient = () => {
  const ingredients = useSelector(state => state.ingredients)

  const ingreExist = ingredients.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      {!ingreExist ? <p>No Ingredients Added</p> : null}
      {ingredients.map(item =>
        [...Array(item.quantity)].map((item2, index) => (
          <IngredientDiv name={item.name} key={index.toString}></IngredientDiv>
        ))
      )}
    </>
  )
}

export default Ingredient
