import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterType } from '../../types'

export type FilterStateType = {
  filter: FilterType
}

const initialState: FilterStateType = {
  filter: {
    with_genres: [],
    primary_release_year: ``,
    sort_by: `vote_count.desc`
  },
}

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload
    },
    
  },
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
