import DataTable from 'react-data-table-component'
import PropsTypes from 'prop-types'

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>

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
  return (
    <DataTable
      onRowClicked={row => console.log(row)}
      columns={columns}
      data={allUsers}
      pagination
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
