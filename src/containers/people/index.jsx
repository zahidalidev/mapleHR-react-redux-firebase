import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Card from 'components/card'
// import Table from 'components/table'

import 'containers/people/styles.css'
import { useEffect } from 'react'
import { getUsers } from 'services/userServices'

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 39,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
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
  const getAllUsers = async () => {
    try {
      const res = await getUsers()
      console.log(res)
    } catch (error) {
      console.log('Getting users error: ', error)
    }
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className='container-fluid people-container'>
      <div className='people-wrapper'>
        <div className='card-header '>
          <span className='card-title'>People (0)</span>
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

            <div className='search-bar'>
              <span
                style={{
                  border: '1px solid rgb(153, 153, 153)',
                  borderRadius: '7px',
                  color: 'rgb(51, 51, 51)',
                  padding: '0.5%'
                }}
              >
                <span
                  className='fa fa-search'
                  style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: '0.9em' }}
                ></span>
                <input
                  type='text'
                  className='search-input'
                  maxLength='30'
                  minLength='2'
                  placeholder='Search'
                />
              </span>

              <FormControlLabel
                className='mui-switch'
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label=''
              />
            </div>
          </div>
          <header className='card-bar-body' />

          {/* <Table /> */}
          <Card />
        </div>
      </div>
    </div>
  )
}

export default People
