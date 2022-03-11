import { shallow } from 'enzyme'

import Button from 'components/button'

const validButton = <Button btnName='Login' />

describe('Button', () => {
  test('renders', () => {
    expect(shallow(validButton).exists()).toBe(true)
  })

  test('should render button', () => {
    expect(shallow(validButton).getElements()).toMatchSnapshot()
  })
})
