import { Card, CardMedia, Typography, CardContent } from '@mui/material'
import { Call, Email } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Pagination from 'components/pagination'

import 'components/card/styles.css'

const UserCard = ({ allUsers }) => {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const navigate = useNavigate()

  const itemsPerPage = 12

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(allUsers.slice(itemOffset, endOffset))
    setPageCount(Math.floor(allUsers.length / itemsPerPage))
  }, [itemOffset, allUsers])

  const handlePageClick = (event, pageNumber) => {
    const newOffset = (pageNumber * itemsPerPage) % allUsers.length
    setItemOffset(newOffset)
  }

  return (
    <div className='cards-container'>
      {currentItems.map(item => (
        <div key={item.id} className='card-wrapper'>
          <Card onClick={() => navigate(`/People/${item.id}`, { state: item })} className='card'>
            <CardMedia className='media-card' component='img' image={item.image} alt='User Image' />
            <CardContent className='card-content-wrapper'>
              <Typography className='card-content c-card-title'>{item.name}</Typography>
              <Typography className='card-content card-id'>ID-{item.id}</Typography>
              <div className='icon-wrapper'>
                <Email className='card-content' />
                <Typography className='card-content card-email'>{item.email}</Typography>
              </div>
              <div className='icon-wrapper'>
                <Call className='card-content' />
                <Typography className='card-content card-contact'>{item.contact}</Typography>
              </div>
              <div className='user-designation'>
                <p className='user-designationText'>{item.title}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  )
}

UserCard.propTypes = {
  allUsers: PropTypes.array.isRequired
}

export default UserCard
