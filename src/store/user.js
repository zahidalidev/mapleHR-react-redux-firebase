import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: { token: '' },
  reducers: {
    USER_SIGNUP: (user, action) => {
      user.token = action.payload.token
      localStorage.setItem('token', user)
    },
    USER_LOGIN: (user, action) => {
      user.token = action.payload.token
      localStorage.setItem('token', user)
    }
  }
})

export const { USER_SIGNUP, USER_LOGIN } = slice.actions
export default slice.reducer
