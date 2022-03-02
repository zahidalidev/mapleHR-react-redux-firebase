import makeAnimated from 'react-select/animated'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const animatedComponents = makeAnimated()

const CustomSelect = ({ handleFilter }) => {
  const [options, setOptions] = useState([])

  const allUsers = useSelector(state => state.allUsers)

  useEffect(() => {
    setOptions(
      allUsers
        .map(item => item.title)
        .filter((value, index, self) => {
          if (self.indexOf(value) === index) {
            return { value: value, label: value }
          }
        })
        .map(title => {
          return { value: title, label: title }
        })
    )
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
