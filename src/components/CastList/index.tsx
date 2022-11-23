
import React from 'react'

import { CastType } from '../../types'
import ActorCard from '../ActorCard'

import styles from './CastList.module.scss'

type PropsType = {
  cast : CastType[] | undefined
}

const CastList:React.FC<PropsType> = React.memo(({cast}) => {
   
  return (
    <div className={styles.root}>
      {cast?.map(actor => actor.profile_path ? <ActorCard key={actor.id} actor={actor}/> : ``)}
    </div>
  )
})

export default CastList
