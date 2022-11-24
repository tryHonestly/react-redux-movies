import { IconButton } from '@mui/material';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../constants/routes';

const HomeButton = () => {
 
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(RoutesEnum.Home)
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  return (
    <IconButton
      onClick={() => clickHandler()}
      size="large"
      edge="start"
      color="inherit"
      sx={{ mr: 2 }}
    >
      <HomeIcon fontSize="large" />
    </IconButton>
  )
}

export default HomeButton
