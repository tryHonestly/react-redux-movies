import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import SearchInput from './SearchInput';
import { SignInButton } from './Buttons/SignInButton';
import HomeButton from './Buttons/HomeButton';
import ProfileMenu from './ProfileMenu';
import { selectIsAuth } from '../redux/selectors';



export const SearchAppBar:React.FC = () => {
  const isAuth = useSelector(selectIsAuth)
 
  
  return (
    <Box sx={{ flexGrow: 1, marginBottom:'59px',}}>
      <AppBar sx={{ bgcolor:`#252525` }} position="fixed">
        <Toolbar>
          <HomeButton/>
         
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
           React-Redux-Movies
          </Typography>
          
          <SearchInput/>

          <Box sx={{ flexGrow: 1 }} />
          {isAuth ?  <ProfileMenu/>  : <SignInButton/> }
          
        </Toolbar>
      
      </AppBar>
    
    </Box>
  );
}




