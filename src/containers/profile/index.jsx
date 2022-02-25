import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { UPDATE_USER, REMOVE_USER } from 'store/allUsers'
import Button from 'components/button'
import Loader from 'components/loader'
import Input from 'components/input'
import { validateUser } from 'utils/userValidate'
import { updateUser, removeUser } from 'services/userServices'

import 'containers/profile/styles.css'

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
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
      password: password || ''
    })
  }, [location.state])

  const submit = async values => {
    setLoading(true)
    try {
      const action = document.activeElement.dataset.flag
      const uid = location.state.id
      if (action === 'Update') {
        await updateUser({ ...values, uid })
        dispatch(UPDATE_USER({ ...values, uid }))
      } else {
        await removeUser(uid)
        dispatch(REMOVE_USER({ uid }))
      }

      navigate('/people')
    } catch (error) {
      console.log('Updation Error: ', error)
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
