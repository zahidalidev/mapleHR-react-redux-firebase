import DataTable, { createTheme } from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import PropsTypes from 'prop-types'

createTheme('solarized', {
  action: {
    hover: 'rgb(230, 244, 255)'
  }
})

const columns = [
  {
    name: 'Image',
    cell: row => (
      <img height='35rem' style={{ borderRadius: '20rem' }} alt={row.image} src={row.image} />
    ),
    sortable: true
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true
  },
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true
  },
  {
    name: 'Contact',
    selector: row => row.contact,
    sortable: true
  }
]

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
