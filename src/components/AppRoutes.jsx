import { Route, Routes } from 'react-router-dom'

import Login from 'containers/auth/login'
import Checkout from 'containers/checkout'
import Home from 'containers/home'
import Orders from 'containers/orders'

const routeList = [
  { path: '/', component: <Home /> },
  { path: '/login', component: <Login /> },
  { path: '/checkout', component: <Checkout /> },
  { path: '/orders', component: <Orders /> }
]

const AppRoutes = () => {
  return (
    <Routes>
      {routeList.map(item => (
        <Route key={item.path} path={item.path} exact element={item.component} />
      ))}
    </Routes>
  )
}

export default AppRoutes
