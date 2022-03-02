export const columns = [
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
