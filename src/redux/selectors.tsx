import { RootState } from "./store";

export const selectFilter = (state:RootState) => state.filterReducer.filter
export const selectPage = (state:RootState) => state.pageReducer.page
export const selectCategory = (state:RootState) => state.categoriesReducer.category
export const selectIsAuth = (state:RootState) => state.authReducer.isAuth
export const selectUser = (state:RootState) => state.authReducer.user
export const selectSearchQueryString = (state:RootState) => state.searchReducer.searchQueryString