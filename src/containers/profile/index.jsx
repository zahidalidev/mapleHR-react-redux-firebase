import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

import Button from 'components/button'
import Loader from 'components/loader'
import Input from 'components/input'
import { validateUser } from 'utils/userValidate'

import 'containers/profile/styles.css'

const Profile = () => {
  const [loading, setLoading] = useState(false)
  //   const navigate = useNavigate()
  const initialValues = {
    name: '',
    title: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  }

  const submit = async values => {
    try {
      const action = document.activeElement.dataset.flag
      console.log(values)
      console.log('The flag is:', action)
      setLoading(true)
      //   navigate('/people')
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

export default Profile
