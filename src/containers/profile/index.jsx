import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import PropsTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from 'components/button'
import Loader from 'components/loader'
import Input from 'components/input'
import { validateUser } from 'utils/userValidate'

import 'containers/profile/styles.css'

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  //   const navigate = useNavigate()
  const initialValues = {
    name: '',
    title: '',
    email: '',
    contact: '',
    password: ''
  }

  useEffect(() => {
    const { name, title, email, contact, password } = location.state
    formik.setValues({
      name,
      title,
      email,
      contact,
      password
    })
  }, [location.state])

  const submit = async values => {
    try {
      const action = document.activeElement.dataset.flag
      console.log(values)
      console.log('The flag is:', action)
      setLoading(true)
    } catch (error) {
      console.log('Login Error: ', error)
    }
    setLoading(false)
  }

  const formik = useFormik({
    initialValues,
    validate: validateUser,
    onSubmit: submit
  })

  return (
    <>
      <Loader show={loading} />
      <div className='form-container'>
        <div className='form-container-div'>
          <div>
            <div>
              <div className='c-update'>Update User</div>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className='form-fields'>
                  {Object.keys(formik.values).map(item => (
                    <Input key={item} item={item} formik={formik} />
                  ))}
                </div>

                <div className='btn-container'>
                  <Button btnName='Update' />
                  <Button backgroundColor='#ff6347' btnName='Delete' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  route: PropsTypes.isRequired
}

export default Profile
