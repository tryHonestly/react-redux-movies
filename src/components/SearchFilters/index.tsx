import { useEffect, useState } from 'react'
import React from 'react'
import Button from '@mui/material/Button'

import { SortPicker } from '../SortPicker'
import { YearPicker } from '../YearPicker'
import { useDispatch, useSelector } from 'react-redux'
import GenresList from '../GenresList'
import { setSearchQueryString } from '../../redux/slices/SearchSlice'
import { selectFilter, selectSearchQueryString } from '../../redux/selectors'
import { setFilter } from '../../redux/slices/FilterSlice'

import styles from './SearchFilters.module.scss'

type PropsType = {
  setState? : (state : {top:boolean}) => void
}

const SearchFilters:React.FC<PropsType> = React.memo(({setState}) => {

  const searchQueryString = useSelector(selectSearchQueryString)
  const filter= useSelector(selectFilter) 

  const dispatch = useDispatch()
    
  const [chosenGenres, setChosenGenres] = useState<number[]>(filter.with_genres)
  const [chosenYear, setChosenYear] = useState<string>(filter.primary_release_year)
  const [chosenSort, setChosenSort] = useState<string>(filter.sort_by)


  
  const apply = () => {
    dispatch(setFilter({with_genres:chosenGenres, primary_release_year:chosenYear, sort_by:chosenSort}))
    dispatch(setSearchQueryString(``))
    if(setState) {
      setState({top: false})
    }
   }
  const reset = () => {
    dispatch(setFilter({with_genres:[], primary_release_year:'', sort_by:''}))
    setChosenGenres([])
    setChosenSort(``)
    setChosenYear(``)
  }
 
  useEffect(() => {
    if(searchQueryString){
      setChosenGenres([])
      setChosenSort(``)
      setChosenYear(``)
    }
  }, [searchQueryString])
 
  
  return (
    <div className={styles.root}>
      <GenresList chosenGenres={chosenGenres} setChosenGenres={setChosenGenres} />
      <YearPicker chosenYear={chosenYear} setChosenYear={setChosenYear} />
      <SortPicker chosenSort={chosenSort} setChosenSort={setChosenSort}/>
      <Button variant="contained" size="large" onClick={() => apply()}>Apply</Button>
      <Button variant="outlined"  size="large" onClick={() => reset()}>Reset</Button>
    </div>
  )
})


export default SearchFilters