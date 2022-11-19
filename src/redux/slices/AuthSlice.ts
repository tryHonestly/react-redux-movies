import {  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../types'


export type AuthStateType = {
  user: UserType
  isAuth: boolean
 
}

const initialState: AuthStateType = {
  user: {} as UserType,
  isAuth: false,
 
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.user = { ...action.payload }
      state.isAuth = true
    },
    logout(state) {
      state.user = {} as UserType
      state.isAuth = false
    },
  },

})

export const { logout, setUser } = authSlice.actions
export default authSlice.reducer
