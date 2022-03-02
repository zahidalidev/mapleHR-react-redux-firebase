import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  List,
  Toolbar,
  Tooltip
} from '@mui/material'
import { Logout, People, Menu as MenuIcon } from '@mui/icons-material/'
import PropTypes from 'prop-types'

import { userLogout } from 'services/userServices'
import { USER_LOGOUT } from 'store/user'

import 'components/appbar/styles.css'

const drawerWidth = 80

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentMenu, setCurrentMenu] = useState('/')

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isHome = currentMenu === '/people'

  const menus = [
    {
      title: 'People',
      path: '/people',
      icon: <People style={{ color: isHome && '#60b063' }} />
    },
    {
      title: 'Logout',
      path: '/login',
      icon: <Logout />
    }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  useEffect(() => {
    setCurrentMenu(pathname)
  }, [pathname])

  const handleLogout = async () => {
    try {
      await userLogout()
      dispatch(USER_LOGOUT())
    } catch (error) {
      console.log('logout error: ', error)
    }
  }

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {menus.map(item => (
          <Tooltip key={item.path} title='Logout'>
            <ListItem
              onClick={() => {
                navigate(item.path)
                item.path === '/login' && handleLogout()
              }}
              button
              style={{
                borderLeft: item.path === '/login' ? '5px solid #fff' : '5px solid #60b063'
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        className='appbar'
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon className='drawer-icon' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func
}

export default ResponsiveDrawer
