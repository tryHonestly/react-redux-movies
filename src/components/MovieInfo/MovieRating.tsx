import { Rating } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/selectors'
import { TMDB_UserApi } from '../../services/TMDB_UserApi'
import { MovieDetailType } from '../../types'

import styles from './MovieInfo.module.scss'


type PropsType = {
  details: MovieDetailType | undefined
 
}

const MovieRating = ({details} : PropsType) => {

  const isAuth = useSelector(selectIsAuth)

  const rateMovie = async (value: number | null) => {
    try {
      if (details?.id) {
        const { data } = await TMDB_UserApi.rateMovie(
          details?.id,
          value
        )
        data.success && alert(data.status_message)
      }
    } catch (e) {
      alert(`This is an error alert — Failed to rate movie`)
    }
  }

  return (
    <div className={styles.rating}>
      <p>Rating</p>
      <Rating
        name="customized-10"
        defaultValue={details?.vote_average}
        max={10}
        disabled={!isAuth || details?.status !== `Released`}
        size="large"
        onChange={(e, value) => {
          rateMovie(value)
        }}
      />
      / {details?.vote_average.toFixed(1)} / votes {details?.vote_count}
    </div>
  )
}

export default MovieRating
