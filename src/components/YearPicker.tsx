import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const year = new Date('1915').getFullYear()
const years = Array.from(new Array(110), (_, index) => index + year).reverse()


type PropsType = {
  chosenYear : string
  setChosenYear: (year:string) => void
}


export const YearPicker:React.FC<PropsType> = React.memo(({chosenYear, setChosenYear}) => {

  const handleChange = (event: SelectChangeEvent) => {
    setChosenYear(event.target.value)
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={chosenYear}
          onChange={handleChange}
          label="year"
        >
          <MenuItem value="">None</MenuItem>
          {years.map((year) => {
            return (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
})
