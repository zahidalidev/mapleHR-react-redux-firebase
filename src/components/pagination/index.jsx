import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import Stack from '@mui/material/Stack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PropTypes from 'prop-types'

import 'components/pagination/styles.css'

const CusPagination = ({ pageCount, handlePageClick }) => {
  return (
    <div className='pagination-wrapper'>
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          onChange={handlePageClick}
          renderItem={item => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  )
}

CusPagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired
}

export default CusPagination
