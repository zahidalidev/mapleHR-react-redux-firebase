import { shallow } from 'enzyme'

import Input from 'components/input'

const valudInputComponent = <Input item='email' formik={{ errors: [], values: [] }} />

describe('Input', () => {
  test('render', () => {
    expect(shallow(valudInputComponent).exists()).toBe(true)
  })

  test('should render input component', () => {
    expect(shallow(valudInputComponent).getElements()).toMatchSnapshot()
  })
})
