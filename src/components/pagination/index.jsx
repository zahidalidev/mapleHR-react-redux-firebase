import { Pagination, PaginationItem, Stack } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
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
            <PaginationItem components={{ previous: ArrowBack, next: ArrowForward }} {...item} />
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
