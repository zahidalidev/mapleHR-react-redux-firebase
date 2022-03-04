import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: { token: '' },
  reducers: {
    USER_SIGNUP: (user, action) => {
      user.token = action.payload.token
      localStorage.setItem('token', JSON.stringify(user.token))
    },
    USER_LOGIN: (user, action) => {
      user.token = action.payload.token
      localStorage.setItem('token', JSON.stringify(user.token))
    },
    USER_LOGOUT: user => {
      user.token = ''
      localStorage.removeItem('token')
    }
  }
})

export const { USER_SIGNUP, USER_LOGIN, USER_LOGOUT } = slice.actions
export default slice.reducer
