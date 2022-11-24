import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { CastType, MovieType } from '../types'
import { MainCard } from './MovieCards'
import { Container } from '@mui/material'
import CastList from './CastList'
import NotFoundBlock from './NotFound'
import NotFound from './NotFound'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps)  => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

type PropsType = {
  plot: string | undefined
  cast: CastType[] | undefined
  similarMovies: MovieType[] | undefined
}

export const MovieTabs:React.FC<PropsType> = React.memo((props) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="PLOT" {...a11yProps(0)} />
          <Tab label="CAST" {...a11yProps(1)} />
          <Tab label="SIMILAR MOVIES" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {props.plot || <NotFoundBlock/>}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.cast?.length ? <CastList cast={props.cast} /> : <NotFoundBlock/>}
      </TabPanel>
      <TabPanel  value={value} index={2}>
        <Container maxWidth={'xl'} sx={{display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center'}}>
          {props.similarMovies?.length === 0 && <NotFound/>}
          {props.similarMovies?.map((movie) => <MainCard key={movie.id} movie={movie} />)}
        </Container>
      </TabPanel>
    </Box>
  )
})
