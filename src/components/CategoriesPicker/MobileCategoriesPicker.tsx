import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarsIcon from '@mui/icons-material/Stars';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCategory } from '../../redux/slices/CategorySlice';
import { setPage } from '../../redux/slices/PageSlice';
import { CategoryType } from '../../types';
import { RoutesEnum } from '../../constants/routes'
import { selectCategory } from '../../redux/selectors';

import styles from './MobileCategoriesPicker.module.scss'


export const MobileCategoriesPicker:React.FC = React.memo(() => {

  const category = useSelector(selectCategory)
  const [value, setValue] = React.useState<CategoryType>(category);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleChange = (event: React.SyntheticEvent,value: CategoryType) => {
    setValue(value)
    dispatch(setCategory(value))
    dispatch(setPage(1))
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


  return (
    <Box className={styles.root} >
      <BottomNavigation
       
        showLabels
        value={value}
        onChange={(event, value) => handleChange(event,value)}
      >
        <BottomNavigationAction label="Popular" value="popular" icon={<WhatshotIcon/>} />
        <BottomNavigationAction label="Top Rated" value="top_rated" icon={<StarsIcon />} />
        <BottomNavigationAction label="Upcomming" value="upcoming" icon={<FiberNewIcon />} />
        <BottomNavigationAction label="Catalog" value={value} onClick={() => {navigate(RoutesEnum.Catalog)}} icon={<MenuBookIcon />} />
        
      </BottomNavigation>
      
    </Box>
  );
})

