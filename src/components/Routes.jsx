import { Route, Routes, Navigate } from 'react-router-dom'

import Login from 'containers/auth/login'
import Signup from 'containers/auth/signup'
import People from 'containers/people'

const routeList = [
  { path: '/signup', component: <Signup /> },
  { path: '/login', component: <Login /> },
  { path: '/People', component: <People /> }
]

const AppRoutes = () => {
  return (
    <Routes>
      {routeList.map(item => (
        <Route key={item.path} path={item.path} exact element={item.component} />
      ))}
      <Route path='/' element={<Navigate replace to='/login' />} />
    </Routes>
  )
}

export default AppRoutes