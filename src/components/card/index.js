import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import { useSelector } from 'react-redux'

import 'components/card/styles.css'

const UserCard = () => {
  const allUsers = useSelector(state => state.allUsers)

  return (
    <div className='cards-container'>
      {allUsers.map(item => (
        <div key={item.uid} className='card-wrapper'>
          <Card className='card'>
            <CardMedia
              className='media-card'
              component='img'
              image='https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png'
              alt='User Image'
            />
            <CardContent className='card-content-wrapper'>
              <Typography className='card-content c-card-title'>Abdul Hannan</Typography>
              <Typography className='card-content card-id'>ID-272</Typography>
              <div className='icon-wrapper'>
                <EmailIcon className='card-content' />
                <Typography className='card-content card-email'>zahid@gmaill.com</Typography>
              </div>
              <div className='icon-wrapper'>
                <CallIcon className='card-content' />
                <Typography className='card-content card-contact'>03367088018</Typography>
              </div>

              <div className='user-designation'>
                <p className='user-designationText'>Associate Software Engineer</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default UserCard
