import DataTable, { createTheme } from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import PropsTypes from 'prop-types'

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>

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
    )
  },
  {
    name: 'Name',
    selector: row => row.name
  },
  {
    name: 'Title',
    selector: row => row.title
  },
  {
    name: 'Email',
    selector: row => row.email
  },
  {
    name: 'Contact',
    selector: row => row.contact
  }
]

const Table = ({ allUsers }) => {
  const navigate = useNavigate()
  console.log(allUsers)
  return (
    <DataTable
      theme='solarized'
      onRowClicked={row => navigate(`/People/${row.id}`, { state: row })}
      columns={columns}
      data={allUsers}
      pagination
      highlightOnHover
      pointerOnHover
      paginationPerPage={15}
      expandableRowsComponent={ExpandedComponent}
    />
  )
}

ExpandedComponent.propTypes = {
  data: PropsTypes.isRequired
}

Table.propTypes = {
  allUsers: PropsTypes.array.isRequired
}

export default Table
