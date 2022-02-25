import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'allUsers',
  initialState: [],
  reducers: {
    ADD_ALL_USERS: (users, action) => {
      users.splice(0, users.length)
      users.push(...action.payload.users)
    },
    UPDATE_USER: (users, action) => {
      const index = users.findIndex(item => item.uid === action.payload.uid)
      users[index] = action.payload
    },
    REMOVE_USER: (users, action) => {
      const index = users.findIndex(item => item.uid === action.payload.uid)
      users.splice(index, 1)
    }
  }
})

export const { ADD_ALL_USERS, UPDATE_USER, REMOVE_USER } = slice.actions
export default slice.reducer
