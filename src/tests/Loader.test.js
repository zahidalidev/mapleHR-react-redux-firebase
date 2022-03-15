import { shallow } from 'enzyme'

import Loader from 'components/loader'

describe('loader', () => {
  test('renders', () => {
    expect(shallow(<Loader show={true} />).exists()).toBe(true)
  })

  test('loader should return null', () => {
    expect(shallow(<Loader show={false} />).isEmptyRender()).toBe(true)
  })

  test('should render loader', () => {
    expect(shallow(<Loader show={true} />).getElements()).toMatchSnapshot()
  })
})
