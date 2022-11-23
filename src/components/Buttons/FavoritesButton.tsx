import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { RoutesEnum } from '../../constants/routes'

const FavoritesButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      size="large"
      color="inherit"
      sx={{ textTransform: 'none'}}
      onClick={() => {
        navigate(RoutesEnum.Favorites)
      }}
    >
      <Typography variant="body1">Favorites</Typography>&nbsp;
      <FavoriteIcon />
    </Button>
  )
}

export default FavoritesButton
