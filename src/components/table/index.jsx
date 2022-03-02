import DataTable, { createTheme } from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import PropsTypes from 'prop-types'

import { columns } from 'utils/constants'

createTheme('solarized', {
  action: {
    hover: 'rgb(230, 244, 255)'
  }
})

const Table = ({ allUsers }) => {
  const navigate = useNavigate()

  return (
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
}

Table.propTypes = {
  allUsers: PropsTypes.array.isRequired
}

export default Table
