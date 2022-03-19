import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import AppBar from 'components/sample/AppBar'

describe('Button', () => {
  test('renders', () => {
    expect(shallow(<AppBar />).exists()).toBe(true)
  })

  test('should render button', () => {
    const tree = renderer.create(<AppBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should have Model component', () => {
    const wrapper = shallow(<AppBar />)
    const modal = wrapper.find('ForwardRef(Modal)')
    expect(modal.exists()).toBe(true)
  })

  test('should have switch', () => {
    const wrapper = shallow(<AppBar />)
    const switchType = wrapper.find('ForwardRef(FormGroup)')
    expect(switchType.exists()).toBe(true)
  })

  test('should have Box', () => {
    const wrapper = shallow(<AppBar />)
    const box = wrapper.find('ForwardRef(Box)')
    expect(box.exists()).toBe(true)
  })

  test('default switch value should be true', () => {
    const wrapper = shallow(<AppBar />)
    const formControl = wrapper.find('ForwardRef(FormControlLabel)')
    expect(formControl.getElement().props.control.props.defaultChecked).toBe(true)
  })

  test('default color theme should be dark', () => {
    const wrapper = shallow(<AppBar />)
    const formControl = wrapper.find('div').first()
    expect(formControl.getElement().props.style.backgroundColor).toBe('#fff')
  })

  test('after clicking the switch the theme color should be light', () => {
    const wrapper = shallow(<AppBar />)
    wrapper.find('ForwardRef(FormControlLabel)').simulate('change')

    const formControl = wrapper.find('div').first()
    expect(formControl.getElement().props.style.backgroundColor).toBe('#000')
  })
})
