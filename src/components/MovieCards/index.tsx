import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';

import { MovieType } from '../../types'
import { useMediaQuery } from '../../hooks/useMediaQuery'


import styles from './MovieCards.module.scss'

type PropsType = {
  movie: MovieType
  children?: React.ReactNode
}

export const CatalogCard: React.FC<PropsType> = React.memo(({ movie, children }) => {
  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(`/moviePage/${movie.id}`)
  }

  const { isMobile } = useMediaQuery()

  const navigate = useNavigate()
  const maxLength = isMobile ? 100 : 250

  return (
    <CardActionArea onClick={clickHandler}>
      <Card className={styles.catalogCard}>
        <CardContent>
          <Typography component="div" variant="h5">
            {movie.original_title === movie.title
              ? movie.original_title
              : `${movie.original_title} (${movie.title})`}
                <br />
                {movie.release_date}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.overview.length > maxLength
              ? `${movie.overview.slice(0, maxLength)}...`
              : movie.overview}
          </Typography>
        </CardContent>

        <CardMedia
          className={styles.media}
          component="img"
          image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="Poster"
        />
      </Card>
    </CardActionArea>
  )
})

export const MainCard: React.FC<PropsType> = React.memo(({ movie, children }) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(`/moviePage/${movie.id}`)
  }

  return (
    <Card className={styles.mainCard}>
      <CardActionArea onClick={() => clickHandler()}>
        <CardMedia
          className={styles.media}
          component="img"
          image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="Movie Poster"
        />

        <Typography gutterBottom variant="h6" component="div">
        <Typography className={styles.posterRating} variant="h6" component="div">
          {movie.vote_average.toFixed(1)} <StarIcon color='warning'/>
          </Typography>
        </Typography>
        <CardContent className={styles.content}>
          <Typography gutterBottom variant="h6" component="div">
            {movie.original_title === movie.title
              ? movie.original_title
              : `${movie.original_title} (${movie.title})`}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {movie.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      {children}
    </Card>
  )
})
