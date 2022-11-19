import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




export type PageStateType = {
  page: number,
  
}

const initialState : PageStateType = {
  page: 1,
  
}

const pageSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {
    setPage(state, action:PayloadAction<number>) {
      state.page = action.payload
    },
   
   
  },
})

export const { setPage } = pageSlice.actions
export default pageSlice.reducer
