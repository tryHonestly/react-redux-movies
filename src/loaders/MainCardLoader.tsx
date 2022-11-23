import React from 'react'
import { Box, Skeleton } from '@mui/material'

const MainCardLoader = React.memo(() => {
  return (
    <Box sx={{ height: `580px` }}>
      <Skeleton variant="rectangular" width={300} height={450} />
      <br />
      <Skeleton variant="rectangular" width={300} height={25} />
      <br />
      <Skeleton variant="rectangular" width={300} height={25} />
    </Box>
  )
})

export default MainCardLoader
