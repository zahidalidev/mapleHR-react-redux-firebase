import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import PropTypes from 'prop-types'

const animatedComponents = makeAnimated()

const CustomSelect = ({ handleFilter }) => {
  const [options, setOptions] = useState([])

  const allUsers = useSelector(state => state.allUsers)

  useEffect(() => {
    const allTitles = allUsers.map(item => {
      return { value: item.title, label: item.title }
    })

    let unique = allTitles.filter((item, i, ar) => ar.indexOf(item) === i)
    setOptions(unique)
  }, [allUsers])

  return (
    <div style={{ width: '40rem' }}>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        placeholder='Filter'
        isMulti
        options={options}
        onChange={handleFilter}
      />
    </div>
  )
}

CustomSelect.propTypes = {
  handleFilter: PropTypes.func.isRequired
}

export default CustomSelect
