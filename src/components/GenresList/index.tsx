import { Skeleton } from '@mui/material'
import React from 'react'
import { useGetGenresListQuery } from '../../services/TMBD_Api'

import styles from './GenresList.module.scss'

type PropsType = {
  chosenGenres : number[]
  setChosenGenres : (genres : number[]) => void
}

const GenresList:React.FC<PropsType> = React.memo(({chosenGenres, setChosenGenres}) => {
  
  const { data, isFetching } = useGetGenresListQuery()
  
  const toggleChosenGenres = (genreId: number) => {
    if (chosenGenres.includes(genreId)) {
      const newGenres = chosenGenres.filter((id:number) => id !== genreId)
      setChosenGenres([...newGenres])
    } else {
      setChosenGenres([...chosenGenres, genreId])
    }
  }
  
  return (
    <div className={styles.root}>
      {isFetching 
      ? [...new Array(20)].map((_, index) => <Skeleton key={index} height={40} width={130}/>) 
      : data?.genres.map(g => <span 
          onClick={() => toggleChosenGenres(g.id)} 
          className={chosenGenres.includes(g.id) ? `${styles.genre_item} ${styles.chosen}` : styles.genre_item} 
          key={g.id}
          >
          {g.name}
        </span>)
      }
      {}
    </div>
  )
})


export default GenresList