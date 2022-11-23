import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RoutesEnum } from '../../constants/routes'
import { TMDB_tokensApi } from '../../services/TMDB_tokensApi'
import { logout } from '../../redux/slices/AuthSlice'
import { AppDispatch } from '../../redux/store'


const SignOutButton = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const clickHandler = async () => {
    navigate(RoutesEnum.Home)
    dispatch(logout())
    await TMDB_tokensApi.deleteAccessToken()
    window.localStorage.clear()
    
  }

  return (
    <Button color='error' variant='contained' size='large' onClick={clickHandler}>SignOut</Button>
  )
}

export default SignOutButton