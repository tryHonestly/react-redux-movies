import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@mui/material'


import CategoriesPicker from '../../components/CategoriesPicker'
import Paginator from '../../components/Paginator'
import { useGetMoviesByCategoryQuery } from '../../services/TMBD_Api'
import { setPage } from '../../redux/slices/PageSlice'
import { NowWatchingMoviesBoard } from '../../components/NowWatchingMoviesBoard'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { selectCategory, selectPage } from '../../redux/selectors'
import MainCardLoader from '../../loaders/MainCardLoader'
import { MainCard } from '../../components/MovieCards'

import styles from './HomePage.module.scss'

const movieListTilte = {
  upcoming:`Upcoming`,
  popular:`Popular`,
  top_rated:`Top rated`
}

export const HomePage = () => {

  
  
  const dispatch = useDispatch()

  const category = useSelector(selectCategory)
  const page = useSelector(selectPage)
  const { data, isFetching , isError} = useGetMoviesByCategoryQuery({page, category})
 
 
  const { isMobile } = useMediaQuery()
 

  useEffect(() => {
    dispatch(setPage(1))
    return () => {
      dispatch(setPage(1))
    }
  }, [])

  
 
  return (

     <div className={styles.root}>
        <h1>Now watching</h1>
        
        <div className={styles.content}>
          <NowWatchingMoviesBoard/>
          {isMobile 
          ? <><h1>{movieListTilte[category]}</h1><CategoriesPicker isMobile/></>  
          : <CategoriesPicker/>}
          
          {isError 
            ? <Alert severity="error" >This is an error alert — Failed to get Movies</Alert> 
            : <div className={styles.moviesBox}>
                {isFetching
                  ? [...new Array(20)].map((_, index) => <MainCardLoader key={index} />)
                  : data?.results.map((movie) => <MainCard key={movie.id} movie={movie} />)}
          </div>}
            
        </div>
           
        <Paginator totalPages={data?.total_pages} />
      </div>
 
  )
}


