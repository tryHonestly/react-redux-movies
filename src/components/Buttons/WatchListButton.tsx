import React from 'react'
import { Button,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';

import { RoutesEnum } from '../../constants/routes'

const WatchListButton = React.memo(() => {

  const navigate = useNavigate()


  return (
    <Button
      size="large"
      color="inherit"
      sx={{ textTransform: 'none'}}
      onClick={() => {
        navigate(RoutesEnum.WatchList)
      }}
    >
      <Typography variant="body1">Watchlist</Typography>
      &nbsp;
      <ListIcon />
    </Button>
  )
})

export default WatchListButton
