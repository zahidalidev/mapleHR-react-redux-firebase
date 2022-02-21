import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import reportWebVitals from './reportWebVitals'
import 'font-awesome/css/font-awesome.css'
import 'mdbreact/dist/css/mdb.css'
import App from './App'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
