import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Login from 'containers/auth/login'
import People from 'containers/people'
import Profile from 'containers/profile'
import Signup from 'containers/auth/signup'

const routeList = [
  { path: '/People', component: <People /> },
  { path: '/People/:id', component: <Profile /> }
]

const AppRoutes = () => {
  const { token } = useSelector(state => state.user)

  return (
    <Routes>
      {token &&
        routeList.map(item => (
          <Route key={item.path} path={item.path} exact element={item.component} />
        ))}
      <Route key='/login' path='/login' exact element={<Login />} />
      <Route key='/signup' path='/signup' exact element={<Signup />} />
      <Route path='*' element={<Navigate replace to='/login' />} />
    </Routes>
  )
}

export default AppRoutes
