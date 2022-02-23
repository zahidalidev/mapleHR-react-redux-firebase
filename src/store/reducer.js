import { combineReducers } from 'redux'

import userReducer from 'store/user'
import allUsersReducer from 'store/allUsers'

export default combineReducers({
  user: userReducer,
  allUsers: allUsersReducer
})
