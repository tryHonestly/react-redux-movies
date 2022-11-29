import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Alert } from '@mui/material'

import MovieInfo from '../../components/MovieInfo'
import { MovieTabs } from '../../components/MovieTabs'
import MoviePageLoader from '../../loaders/MoviePageLoader'
import { useGetMovieCreditsQuery, useGetMovieDetailsQuery, useGetSimilarMoviesQuery,} from '../../services/TMBD_Api'
import instance from '../../axios'
import { selectIsAuth } from '../../redux/selectors'

import styles from './MoviePage.module.scss'


export const MoviePage = () => {
  const { id } = useParams()
  const { data: details, isFetching, isError} = useGetMovieDetailsQuery(Number(id))
  const { data: credits } = useGetMovieCreditsQuery(Number(id))
  const { data: similarMovies } = useGetSimilarMoviesQuery(Number(id))
  const inLists = useInUsersLists(id)
  
  return (
    
    <div className={styles.root}>

      {isError 
      ? <Alert severity="error">This is an error alert —  Failed to get movie  </Alert>
      : isFetching
        ? <MoviePageLoader/> 
        : <div className={styles.content}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w400/${details?.poster_path}`} alt="Poster" width={400} />       
            <MovieInfo details={details} inLists={inLists} />
            <MovieTabs plot={details?.overview} cast={credits?.cast} similarMovies={similarMovies?.results}/>
          </div>}
   
      
    </div>
  )
}

const useInUsersLists = ( id:string | undefined) => {

  const isAuth = useSelector(selectIsAuth)
  const [inLists, setInLists] = useState({favorite:false, watchlist:false})

  useEffect(() => {
    if (isAuth && id) {
      instance
        .get(`/movie/${id}/account_states`)
        .then((data) => {
          const {favorite, watchlist} = data.data
          setInLists({favorite, watchlist})
        })
    }
  }, [isAuth, id])

  return inLists
}
