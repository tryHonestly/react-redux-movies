
import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ListIcon from '@mui/icons-material/List'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RoutesEnum } from '../constants/routes'
import FavoritesButton from './Buttons/FavoritesButton'
import WatchListButton from './Buttons/WatchListButton'
import SignOutButton from './Buttons/SignOutButton'
import { selectUser } from '../redux/selectors'


type Anchor = 'right'

const ProfileMenu: React.FC = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState({ right: false })
  const user = useSelector(selectUser)



  
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }


  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <FavoritesButton/>
        <WatchListButton/>
        <SignOutButton/>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <React.Fragment key={'right'}>
          <Button sx={{ color: 'white' }} onClick={toggleDrawer('right', true)}>
            <MenuIcon fontSize="large" />
          </Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
            onClick={toggleDrawer('right', false)}
          >
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }} >
              <ListItemText>
                <Typography variant="h4">{user.username}</Typography>
                  <hr />
               </ListItemText>
              <ListItemButton onClick={() => {navigate(RoutesEnum.Favorites)}}>
                <ListItemIcon>
                  <FavoriteIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h4">Favorites</Typography>
                </ListItemText>
              </ListItemButton>
              <ListItemButton onClick={() => {navigate(RoutesEnum.WatchList)}}>
                <ListItemIcon>
                  <ListIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h4">Watchlist</Typography>
                </ListItemText>
              </ListItemButton>
              <ListItemButton>
                <ListItemText>
                  <SignOutButton/>
                </ListItemText>
              </ListItemButton>
             </ListItem>
          </SwipeableDrawer>
        </React.Fragment>
      </Box>
    </>
  )
}

export default ProfileMenu
