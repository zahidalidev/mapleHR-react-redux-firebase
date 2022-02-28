import { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import PeopleIcon from '@mui/icons-material/People'
import LogoutIcon from '@mui/icons-material/ExitToApp'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { ListItem, ListItemIcon } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip'

import { userLogout } from 'services/userServices'
import { USER_LOGOUT } from 'store/user'

const drawerWidth = 80

function ResponsiveDrawer(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentMenu, setCurrentMenu] = useState('/')

  const { token } = useSelector(state => state.user)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLogin = currentMenu === '/login'
  const isHome = currentMenu === '/people'

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  console.log('token: ', token)
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

  const logout = (
    <Tooltip title='Logout'>
      <ListItem
        onClick={() => {
          handleLogout()
          navigate('/login')
        }}
        button
        style={{ borderLeft: '5px solid #fff' }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
      </ListItem>
    </Tooltip>
  )
  const login = (
    <Tooltip title='Login'>
      <ListItem
        onClick={() => navigate('/login')}
        button
        style={{ borderLeft: isLogin && '5px solid #60b063' }}
      >
        <ListItemIcon>
          <LoginIcon style={{ color: isLogin && '#60b063' }} />
        </ListItemIcon>
      </ListItem>
    </Tooltip>
  )

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem
          onClick={() => navigate('/people')}
          button
          style={{ borderLeft: isHome && '5px solid #60b063' }}
        >
          <ListItemIcon>
            <PeopleIcon style={{ color: isHome && '#60b063' }} />
          </ListItemIcon>
        </ListItem>
        {token != '' ? logout : login}
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
        style={{ backgroundColor: '#fff', boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon style={{ color: 'black' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          container={container}
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
