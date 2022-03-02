import { firebaseAuth } from 'config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Login from 'containers/auth/login'
import Loader from './loader'
import People from 'containers/people'
import Profile from 'containers/profile'
import Signup from 'containers/auth/signup'
import { USER_LOGIN } from 'store/user'

const routeList = [
  { path: '/People', component: <People /> },
  { path: '/People/:id', component: <Profile /> }
]

const AppRoutes = () => {
  const [loading, setLoading] = useState(true)
  const { token } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        dispatch(USER_LOGIN({ token: user.accessToken }))
        navigate('/people')
      }
      setLoading(false)
    })
  }, [token])

  return loading ? (
    <Loader show={true} />
  ) : (
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
