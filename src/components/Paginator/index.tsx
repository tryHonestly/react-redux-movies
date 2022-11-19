import React from 'react'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import Stack from '@mui/material/Stack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useDispatch, useSelector } from 'react-redux'

import { setPage } from '../../redux/slices/PageSlice'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { selectPage } from '../../redux/selectors'

import styles from './Paginator.module.scss'


type PropsType = {
  totalPages: number | undefined
}


const Paginator:React.FC<PropsType> = React.memo(({totalPages = 0}) => {
  
  const dispatch = useDispatch()
  const page = useSelector(selectPage)

 
  const { isMobile } = useMediaQuery()

 
  const maxTotalPages = totalPages > 500 ? 500 : totalPages
  
  const onPageChange = (page:number) => {
    dispatch(setPage(page))
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <Stack >
      <Pagination
        className={styles.root}
        size="large"
        hidePrevButton={isMobile}
        hideNextButton={isMobile}
        page={page}
        count={maxTotalPages}
        onChange={(event, page) => onPageChange(page)}
        renderItem={(item) => (
          <PaginationItem
           components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  )
})

export default Paginator