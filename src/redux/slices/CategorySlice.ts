import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CategoryType } from '../../types'



export type CategoriesStateType = {
  category: `upcoming` | `top_rated` | `popular`
}

const initialState : CategoriesStateType = {
  category: `upcoming`,
}

const categoriesSlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setCategory(state, action:PayloadAction<CategoryType>) {
      state.category = action.payload
    },
   
  },
})

export const { setCategory } = categoriesSlice.actions
export default categoriesSlice.reducer
