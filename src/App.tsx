import { Route, Routes } from 'react-router-dom'
import React from 'react'

import { SearchAppBar } from './components/SearchAppBar'
import { RoutesEnum } from './constants/routes'
import Footer from './components/Footer'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from './redux/store'
import { TMDB_UserApi } from './services/TMDB_UserApi'
import { setUser } from './redux/slices/AuthSlice'

import { selectIsAuth } from './redux/selectors'
import { Container } from '@mui/material'
import {
  HomePage,
  CatalogPage,
  MoviePage,
  WatchListPage,
  FavoritePage,
  NotFoundPage,
} from './pages'

import './styles/App.scss'

const App = () => {
  const isAuth = useSelector(selectIsAuth)

  useLogin()

  return (
    <>
      <SearchAppBar />

      <Container maxWidth="xl" sx={{ minHeight: '100vh', padding: '0px' }}>
        <Routes>
          <Route path={RoutesEnum.Home} element={<HomePage />} />
          <Route path={RoutesEnum.Catalog} element={<CatalogPage />} />
          <Route path={RoutesEnum.MoviePage} element={<MoviePage />} />

          {isAuth && (
            <>
              <Route path={RoutesEnum.WatchList} element={<WatchListPage />} />
              <Route path={RoutesEnum.Favorites} element={<FavoritePage />} />
            </>
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App

const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (window.localStorage.getItem(`request_token`)) {
      TMDB_UserApi.authorization()
        .then((account) => {
          dispatch(setUser(account.data))
        })
        .catch(() => {
          alert('Failed to sign in')
        })
        .finally(() => {
          window.localStorage.removeItem('request_token')
        })
    }
    if (window.localStorage.getItem(`access_token`)) {
      TMDB_UserApi.getMe()
        .then((account) => {
          dispatch(setUser(account.data))
        })
        .catch(() => {
          alert('Failed to sign in')
          window.localStorage.removeItem('access_token')
        })
    }
  }, [])
}
