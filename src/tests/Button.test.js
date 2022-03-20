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

  test('should be an button element', () => {
    const wrapper = shallow(validButton)
    const button = wrapper.find('ForwardRef(Button)')
    expect(button.exists()).toBe(true)
  })
})
