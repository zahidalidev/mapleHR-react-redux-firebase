import { Button, FormControlLabel, Switch } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AppBar from 'components/appbar'
import { ADD_ALL_USERS, REMOVE_ALL_USER } from 'store/allUsers'
import Card from 'components/card'
import { getUsers } from 'services/userServices'
import Select from 'components/select'
import Table from 'components/table'

import 'containers/people/styles.css'

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 39,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage:
          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgB7ZHBCQAgCEV/0CCN0mg1Sps0SiO4QV3FgyRFEPhAUPB7eAKOlWmozINRHGrYh/AVmpOiBaWjqux2vCCIObGecPAZ7qQbcqqjAecqCw7WHKzQS/12AAAAAElFTkSuQmCC)'
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#EDEDED'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#60B063',
    width: 25,
    height: 25,
    margin: '6px !important',
    borderRadius: '8px !important',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      bottom: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage:
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgBtZRREYMwDIbT3QTMAUjAAZ0SkAAKBgqYBHAwCeBgDtY5YAq6BMIRStcnlruQHl/6E9IAwEGm6GKtjTE06BeHP5VSJefcMGiHG/QacwxwUmt/W4GeB/iDNE6sHHGkp1/ZO75HVca87gQvBYez51V6rlLD3ozgG3CCg8ytKBOVpJ78FHnF63hHCQaaSY3WAX4nDSXEcs9TetETHx+RT0KyRxfYm9xoPHwE59WaQOnahueoIo2l2QnHFv3Na2q2hu009+iDqDZbuHtqnehJBftPYkBeMdcsNNnf5igRExt58iO7zlniE/pwbDybDawnmrNLe0mhAuajjJ0kmqOWFnb+1SQOpz01HGlfpsEF6JUT3iAAAAAASUVORK5CYII=)'
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#EDEDED'
  }
}))

const People = () => {
  const [isTable, setIsTable] = useState(true)
  const [currentUsers, setCurrentUsers] = useState([])
  const allUsers = useSelector(state => state.allUsers)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const getAllUsers = async () => {
    try {
      const res = await getUsers()
      dispatch(ADD_ALL_USERS({ users: res }))
    } catch (error) {
      dispatch(REMOVE_ALL_USER())
      console.log('Getting users error: ', error)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [user])

  useEffect(() => {
    setCurrentUsers(allUsers)
  }, [allUsers, user])

  const handleChange = () => {
    setIsTable(!isTable)
  }

  const hangleSearch = e => {
    const value = e.target.value.toUpperCase()
    const filteredUsers = allUsers.filter(item => {
      const { name, title, email, contact } = item
      if (
        name.toUpperCase().indexOf(value) != -1 ||
        title.toUpperCase().indexOf(value) != -1 ||
        email.toUpperCase().indexOf(value) != -1 ||
        contact.toUpperCase().indexOf(value) != -1
      ) {
        return item
      }
    })
    setCurrentUsers(filteredUsers)
  }

  const handleFilter = titleArr => {
    const filteredUsers = []
    titleArr.forEach(obj => {
      filteredUsers.push(...allUsers.filter(item => item.title.indexOf(obj.value) != -1))
    })
    setCurrentUsers(titleArr.length != 0 ? filteredUsers : allUsers)
  }

  return (
    <>
      <AppBar />
      <div className='container-fluid people-container'>
        <div className='people-wrapper'>
          <div className='card-header '>
            <span className='card-title'>People ({allUsers.length})</span>
          </div>
          <div className='card-root'>
            <div>
              <div>
                <div className='card-scrollable'></div>
                <div className='card-scroller'>
                  <div className='card-flexContainer'>
                    <Button className='user-btn' variant='text'>
                      All users
                    </Button>
                  </div>
                  <span className='user-bottom'></span>
                </div>
                <header className='card-bar' />
              </div>
              <div className='filter-container'>
                <span className='p-border'>
                  <span className='fa fa-search'></span>
                  <input
                    type='text'
                    className='search-input'
                    maxLength='30'
                    minLength='2'
                    placeholder='Search'
                    onChange={hangleSearch}
                  />
                </span>
                <FormControlLabel
                  className='mui-switch'
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label=''
                  onChange={handleChange}
                />
                <Select handleFilter={handleFilter} />
              </div>
            </div>
            <header className='card-bar-body' />
            {isTable ? <Table allUsers={currentUsers} /> : <Card allUsers={currentUsers} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default People
