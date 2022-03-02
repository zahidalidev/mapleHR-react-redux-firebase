import DataTable, { createTheme } from 'react-data-table-component'
import PropsTypes from 'prop-types'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'
import { useNavigate } from 'react-router-dom'

import { columns } from 'utils/constants'

createTheme('solarized', {
  action: {
    hover: 'rgb(230, 244, 255)'
  }
})

const CusTable = ({ allUsers }) => {
  const navigate = useNavigate()

  const table = (
    <DataTable
      theme='solarized'
      onRowClicked={row => navigate(`/People/${row.id}`, { state: row })}
      columns={columns}
      defaultSortFieldId={1}
      data={allUsers}
      pagination
      highlightOnHover
      pointerOnHover
      paginationPerPage={15}
    />
  )

  const skeleton = (
    <Skeleton>
      <Table rows={5} cols={[<u key={'a'}></u>]} />
    </Skeleton>
  )

  return allUsers.length != 0 ? table : skeleton
}

CusTable.propTypes = {
  allUsers: PropsTypes.array.isRequired
}

export default CusTable
