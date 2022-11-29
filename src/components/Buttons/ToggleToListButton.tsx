import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TMDB_UserApi } from '../../services/TMDB_UserApi'



type PropsType = {
  id: number
  toggle: boolean
  variant?: 'text' | 'outlined' | 'contained' | undefined
  disabled?: boolean
  toList: 'watchList' | 'favorite'
}

const lists = {
  watchList : (id: number, toggle : boolean) => TMDB_UserApi.toggleToWatchList(id, toggle),
  favorite : (id: number, toggle : boolean) => TMDB_UserApi.toggleToFavoriteList(id, toggle),
}

const ToggleToListButton: React.FC<PropsType> = React.memo(({id, toggle, variant = 'text', disabled = false, toList}) => {
 
  const [clicked, setСlicked] = useState(toggle)
  
  const clickHandler = async () => {

    if (!clicked) {
      try {
        await lists[toList](id, true)
      } catch (error) {
        alert(' This is an error alert — Failed to remove movie')
        return
      }
    }
    if (clicked) {
      try {
        await lists[toList](id, false)
      } catch (error) {
        alert('This is an error alert — Failed to add movie')
        return
      }
    }

    setСlicked(!clicked)
  }
   useEffect(() => {
      setСlicked(toggle)
    }, [toggle])
    
  return (
    <Button
      disabled={disabled}
      variant={variant}
      color={clicked ? `error` : `primary`}
      onClick={() => clickHandler()}
    >
      {clicked ? `Delete from ${toList}` : `Add to ${toList}`}
    </Button>
  )
})

export default ToggleToListButton