import { Button} from '@mui/material'
import React from 'react'

import { TMDB_UserApi } from '../../services/TMDB_UserApi'


export const SignInButton = () => {

  const clickHandler = async () => {
    TMDB_UserApi.authentication()
  }


  return (
    <Button  variant="text" onClick={clickHandler}>
      Sign in
    </Button>
  )
}
