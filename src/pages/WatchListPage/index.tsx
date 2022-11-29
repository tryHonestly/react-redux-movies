import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@mui/material'

import Paginator from '../../components/Paginator'

import { selectPage } from '../../redux/selectors'
import { useGetWatchListMoviesQuery } from '../../services/TMBD_Api'
import { MainCard } from '../../components/MovieCards'
import MainCardLoader from '../../loaders/MainCardLoader'
import NotFound from '../../components/NotFound'

import styles from './WatchListPage.module.scss'
import ToggleToListButton from '../../components/Buttons/ToggleToListButton'
import { useSetFirstPage } from '../../hooks/useSetFirstPage'


export const WatchListPage = () => {
  const page = useSelector(selectPage)

  const { data, isFetching, isError, } = useGetWatchListMoviesQuery(page)

  useSetFirstPage()

  return (
    <div className={styles.root}>
      <h1>Watchlist</h1>
      <div className={styles.content}>
        {isError 
        ? <Alert severity="error"> This is an error alert — Failed to get movies</Alert>
        : <div className={styles.moviesBox}>
            {isFetching
              ? [...new Array(20)].map((_, index) => (
                  <MainCardLoader key={index} />
                ))
              : data?.results.map((movie) => (
                  <MainCard key={movie.id} movie={movie}>
                   <ToggleToListButton id={movie.id} toList='watchList' toggle={true}/>
                  </MainCard>
                ))}
                 {data?.results.length === 0 && <NotFound/> }
          </div>
        }
      </div>
      <Paginator totalPages={data?.total_pages} />
    </div>
  )
}
