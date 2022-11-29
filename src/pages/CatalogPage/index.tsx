import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@mui/material'

import { createQueryStringByFilter } from '../../utils/createQueryStringByFilter'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import {useGetDiscoverMoviesListQuery,} from '../../services/TMBD_Api'
import { selectFilter, selectPage, selectSearchQueryString } from '../../redux/selectors'
import Paginator  from '../../components/Paginator'
import SearchFilters from '../../components/SearchFilters'
import Drawer from '../../components/SearchFiltersDrawer'
import { CatalogCard } from '../../components/MovieCards'
import CatalogCardLoader from '../../loaders/CatalogCardLoader'
import NotFound from '../../components/NotFound'

import styles from './CatalogPage.module.scss'

export const CatalogPage = () => {
  
  const filter = useSelector(selectFilter)
  const page = useSelector(selectPage)
  const searchQueryString = useSelector(selectSearchQueryString)
  const filterQueryString = createQueryStringByFilter(filter)
  const { data, isError, isFetching} = useGetDiscoverMoviesListQuery({ page, filterQueryString, searchQueryString })
  
  const { isMobile } = useMediaQuery()
        
  return (
    <div  className={styles.root}>
      {isError && <Alert severity="error">This is an error alert — Failed to get movies</Alert> }
        <div className={styles.content}>
          {isMobile ? <Drawer/> : <SearchFilters />}
              <div className={styles.moviesBox}>
                {isFetching
                  ? [...new Array(20)].map((_, index) => <CatalogCardLoader key={index} />)
                  : data?.results.map((movie) => (
                      <CatalogCard key={movie.id} movie={movie} />
                    ))}
                {data?.results.length === 0 && <NotFound/> }
              </div>
          
        </div>
         <Paginator totalPages={data?.total_pages} />
    </div>
  )
}


