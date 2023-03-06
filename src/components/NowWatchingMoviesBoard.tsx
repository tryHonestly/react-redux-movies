import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { useNavigate } from 'react-router-dom'

import { useGetNowWatchingMoviesQuery } from '../services/TMBD_Api'
import { Alert } from '@mui/material'

export const NowWatchingMoviesBoard: React.FC = React.memo(() => {
  const { data, isError } = useGetNowWatchingMoviesQuery()

  const navigate = useNavigate()

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '0px' }}>Now watching</h1>
      {isError ? (
        <Alert severity="error">
          This is an error alert — Failed to get movies
        </Alert>
      ) : (
        <ImageList sx={{ display: 'flex' }}>
          <ImageListItem key="Subheader"></ImageListItem>
          {data?.results.map((movie) => (
            <ImageListItem
              sx={{ cursor: 'pointer' }}
              key={movie.id}
              onClick={() => {
                navigate(`/moviePage/${movie.id}`)
              }}
            >
              <img
                style={{ width: '200px' }}
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                srcSet={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={movie.title}
                subtitle={movie.release_date}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  )
})
