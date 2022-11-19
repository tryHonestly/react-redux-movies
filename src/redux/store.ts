import { configureStore } from '@reduxjs/toolkit'
import { TMBD_Api } from '../services/TMBD_Api'
import categoriesReducer from './slices/CategorySlice'
import pageReducer from './slices/PageSlice'
import filterReducer from './slices/FilterSlice'
import searchReducer from './slices/SearchSlice'
import authReducer from './slices/AuthSlice'


export const store = configureStore({
  reducer: {
    authReducer,
    searchReducer,
    filterReducer,
    pageReducer,
    categoriesReducer,
    [TMBD_Api.reducerPath] : TMBD_Api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TMBD_Api.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch