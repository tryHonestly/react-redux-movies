import React, { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { useDispatch, useSelector } from 'react-redux'

import { useDebounce } from '../hooks/useDebounce'
import { AppDispatch} from '../redux/store'
import { setSearchQueryString } from '../redux/slices/SearchSlice'
import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '../constants/routes'
import { selectFilter } from '../redux/selectors'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const SearchInput = () => {
  
  const navigate = useNavigate()
     
  const filter = useSelector(selectFilter)
  
  const dispatch = useDispatch<AppDispatch>()
  
  const [inputValue, setInputValue] = useState(``)
  const debounceValue = useDebounce(inputValue, 600)
  
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
   if (e.code === `Enter`) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      dispatch(setSearchQueryString(debounceValue))
      navigate(RoutesEnum.Catalog)
    }
  }

  useEffect(() => {
   if(debounceValue){
      window.scrollTo({top: 0, behavior: 'smooth'});
      dispatch(setSearchQueryString(debounceValue))
      navigate(RoutesEnum.Catalog)
    }
   }, [debounceValue])


   useEffect(() => {
    setInputValue(``)
    dispatch(setSearchQueryString(``))
   }, [filter])

  return (
    <Search onKeyDown={onKeyDown}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchInput
