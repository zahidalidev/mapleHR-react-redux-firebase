import DataTable from 'react-data-table-component'
import PropsTypes from 'prop-types'

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>

const columns = [
  {
    name: 'Image',
    cell: row => <img height='35rem' alt={row.image} src={row.image} />
  },
  {
    name: 'Name',
    selector: row => row.name
  },
  {
    name: 'title',
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

const data = [
  {
    id: 1,
    image: 'https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png',
    name: 'Zahid Ali',
    title: 'Associate Software Engineer',
    email: 'm.zahidalidev@gmail.com',
    contact: '03367088018'
  },
  {
    id: 2,
    image: 'https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png',
    name: 'Zahid Ali',
    title: 'Associate Software Engineer',
    email: 'm.zahidalidev@gmail.com',
    contact: '03367088018'
  },
  {
    id: 3,
    image: 'https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png',
    name: 'Zahid Ali',
    title: 'Associate Software Engineer',
    email: 'm.zahidalidev@gmail.com',
    contact: '03367088018'
  },
  {
    id: 4,
    image: 'https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png',
    name: 'Zahid Ali',
    title: 'Associate Software Engineer',
    email: 'm.zahidalidev@gmail.com',
    contact: '03367088018'
  },
  {
    id: 5,
    image: 'https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png',
    name: 'Zahid Ali',
    title: 'Associate Software Engineer',
    email: 'm.zahidalidev@gmail.com',
    contact: '03367088018'
  }
]

const Table = () => {
  return (
    <DataTable
      onRowClicked={row => console.log(row)}
      columns={columns}
      data={data}
      expandableRowsComponent={ExpandedComponent}
    />
  )
}

ExpandedComponent.propTypes = {
  data: PropsTypes.isRequired
}

export default Table
