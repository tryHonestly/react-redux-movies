import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




export type SearchStateType = {
  searchQueryString: string
}

const initialState : SearchStateType = {
  searchQueryString: ``,
}

const searchSlice = createSlice({
  name: 'SearchSlice',
  initialState,
  reducers: {
    setSearchQueryString(state, action:PayloadAction<string>) {
      state.searchQueryString = action.payload
    },
   
  },
})

export const { setSearchQueryString } = searchSlice.actions
export default searchSlice.reducer
