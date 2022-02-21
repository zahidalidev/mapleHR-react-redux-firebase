import { createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { firebaseAuth } from 'config/firebase'
import { login } from 'services/userServices'

const slice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    USER_LOGIN: async (userState, action) => {
      try {
        const { user } = await createUserWithEmailAndPassword(
          firebaseAuth,
          action.payload.email,
          action.payload.password
        )

        await login(user.uid, user.email)

        return { email: action.payload.email }
      } catch (error) {
        console.log('errro singup: ', error)
      }
    }
  }
})

export const { USER_LOGIN } = slice.actions
export default slice.reducer
