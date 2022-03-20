import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import People from 'containers/people'

const store = configureStore()

describe('People', () => {
  test('renders', () => {
    expect(
      shallow(
        <Provider store={store}>
          <People />
        </Provider>
      ).exists()
    ).toBe(true)
  })

  test('should render people container', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <People />
          </BrowserRouter>
        </Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
