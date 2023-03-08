import React from 'react'
import { Skeleton, Box } from '@mui/material'

const MoviePageLoader = React.memo(() => {
  return (
    <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: `25px`, justifyContent: `center`, marginTop:'80px' }}>
      <Skeleton variant="rectangular" width={400} height={600} />
      <Box sx={{display: `flex`, flexDirection: `column`, gap: `20px`, flex: `1`,}}>
        <Skeleton variant="rectangular" width={`100%`} height={45} />
        <Skeleton variant="rectangular" width={`80%`} height={45} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
        <Skeleton variant="rectangular" width={310} height={30} />
      </Box>
      <Skeleton variant="rectangular" width={`100%`} height={50}/>
    </Box>
  )
})

export default MoviePageLoader
