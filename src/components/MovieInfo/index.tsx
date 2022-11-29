import React, { useState } from 'react'
import { ButtonGroup } from '@mui/material'
import { useSelector } from 'react-redux'

import { MovieDetailType } from '../../types'
import { selectIsAuth } from '../../redux/selectors'
import MovieRating from './MovieRating'
import InfoItems from './InfoItems'

import styles from './MovieInfo.module.scss'
import ToggleToListButton from '../Buttons/ToggleToListButton'


type PropsType = {
  details: MovieDetailType | undefined
  inLists: {favorite:boolean, watchlist:boolean}
}


const MovieInfo: React.FC<PropsType> = React.memo(({ details, inLists }) => {
  
  const isAuth = useSelector(selectIsAuth)
  
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        {details?.title} "{details?.release_date}"
      </h1>
      <h2 className={styles.tagline}>{details?.tagline}</h2>

      <h2>Status : {details?.status}</h2>
      {details && (
        <ButtonGroup size="large" aria-label="small button group">
          <ToggleToListButton
            disabled={!isAuth}
            id={details.id}
            toggle={inLists.favorite}
            variant="contained"
            toList="favorite"
          />
          <ToggleToListButton
            disabled={!isAuth}
            id={details.id}
            toggle={inLists.watchlist}
            variant="outlined"
            toList="watchList"
          />
        </ButtonGroup>
      )}
      <MovieRating details={details} />
      <InfoItems details={details} />
    </div>
  )
})

export default MovieInfo
