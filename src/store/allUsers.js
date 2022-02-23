import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'allUsers',
  initialState: [],
  reducers: {
    ADD_ALL_USERS: (users, action) => {
      users.push(...action.payload.users)
    }
  }
})

export const { ADD_ALL_USERS } = slice.actions
export default slice.reducer
