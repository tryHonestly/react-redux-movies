import React from 'react'
import {Skeleton } from '@mui/material'

const CatalogCardLoader = React.memo(() => {
  return <Skeleton variant="rectangular" width={'100%'} height={185} />
})

export default CatalogCardLoader
