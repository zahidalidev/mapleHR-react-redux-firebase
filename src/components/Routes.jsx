import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from 'config/firebase'

import Login from 'containers/auth/login'
import People from 'containers/people'
import Profile from 'containers/profile'
import Signup from 'containers/auth/signup'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { USER_LOGIN, USER_LOGOUT } from 'store/user'

const routeList = [
  { path: '/People', component: <People /> },
  { path: '/People/:id', component: <Profile /> }
]

const AppRoutes = () => {
  const { token } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      user ? dispatch(USER_LOGIN({ token: user.accessToken })) : dispatch(USER_LOGOUT())
    })
  }, [])

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
