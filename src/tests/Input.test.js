import { shallow, render } from 'enzyme'
import Input from 'components/input'

const valudInputComponent = (
  <Input item='email' formik={{ errors: [], values: [], handleChange: () => {} }} />
)

describe('Input', () => {
  test('should be an input element', () => {
    const wrapper = shallow(valudInputComponent)
    const inputType = wrapper.find('input')
    expect(inputType.exists()).toBe(true)
  })

  test('should render', () => {
    expect(shallow(valudInputComponent).exists()).toBe(true)
  })

  test('should render input component', () => {
    expect(shallow(valudInputComponent).getElements()).toMatchSnapshot()
  })
})
