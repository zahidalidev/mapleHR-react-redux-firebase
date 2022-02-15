import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import MaterialList from '@material-ui/core/List'
import _ from 'lodash'

import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGOUT } from 'store/user'
import {
  Bars,
  CollapseNav,
  DrawerList,
  DrawerWrapper,
  Header,
  Image,
  Link,
  List,
  Logo,
  Nav,
  NavList
} from 'components/appbar/style'

import logo from 'assets/burger-logo.b8503d26.png'

const Appbar = () => {
  const [toggle, setToggle] = useState({ left: false })
  const [currentMenu, setCurrentMenu] = useState('/')

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isLogin = currentMenu === '/login'
  const isOrders = currentMenu === '/orders'
  const isHome = currentMenu === '/'
  const activeMenu = drawerClass => (drawerClass ? 'active-menu-drawer' : 'active-menu')

  useEffect(() => {
    setCurrentMenu(pathname)
  }, [pathname])

  const toggleDrawer = open => () => {
    setToggle({ ...toggle, left: open })
  }

  const handleLogout = () => {
    dispatch(USER_LOGOUT())
    navigate('/')
  }

  const handleNavigation = menu => {
    setCurrentMenu(menu)
    navigate(menu)
  }

  const loginMenu = (navClass, drawerClass) => (
    <>
      <List navClass={navClass} isActive={`${isOrders ? activeMenu(drawerClass) : false}`}>
        <Link onClick={() => handleNavigation('/orders')}>Orders</Link>
      </List>
      <List navClass={navClass}>
        <Link onClick={handleLogout}>Logout</Link>
      </List>
    </>
  )

  const logoutMenu = (navClass, drawerClass) => (
    <List navClass={navClass} isActive={`${isLogin ? activeMenu(drawerClass) : false}`}>
      <Link onClick={() => handleNavigation('/login')}>Login</Link>
    </List>
  )

  const menuList = (navClass, drawerClass) => (
    <>
      <List navClass={navClass} isActive={`${isHome ? activeMenu(drawerClass) : false}`}>
        <Link onClick={() => handleNavigation('/')}>Burger Builder</Link>
      </List>
      {!_.isEmpty(user) ? loginMenu(navClass, drawerClass) : logoutMenu(navClass, drawerClass)}
    </>
  )

  const drawerList = () => (
    <DrawerWrapper onClick={toggleDrawer(false)}>
      <Image onClick={() => handleNavigation('/')} src={logo} />
      <MaterialList>
        <DrawerList>{menuList(false, true)}</DrawerList>
      </MaterialList>
    </DrawerWrapper>
  )

  return (
    <Header>
      <Drawer open={toggle['left']} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>

      <Nav className='navbar-expand-lg py-3 py-lg-0'>
        <button
          type='button'
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          onClick={toggleDrawer(true)}
        >
          <Bars onClick={toggleDrawer(true)} className='fa fa-bars'></Bars>
        </button>

        <Logo onClick={() => handleNavigation('/')} src={logo} />

        <CollapseNav className='collapse navbar-collapse'>
          <NavList>{menuList(true, false)}</NavList>
        </CollapseNav>
      </Nav>
    </Header>
  )
}

export default Appbar
