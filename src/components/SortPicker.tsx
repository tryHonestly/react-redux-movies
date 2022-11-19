import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'



type PropsType = {
  chosenSort : string
  setChosenSort: (sort:string) => void
}



export const SortPicker:React.FC<PropsType> = React.memo(({chosenSort,setChosenSort}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setChosenSort(event.target.value)
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={chosenSort}
          onChange={handleChange}
          label="sort"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="release_date.desc">Release date</MenuItem>
          <MenuItem value="popularity.desc">Popularity</MenuItem>
          <MenuItem value="vote_count.desc">Votes count</MenuItem>
          <MenuItem value="revenue.desc">Revenue</MenuItem>
         
        </Select>
      </FormControl>
    </div>
  )
})
