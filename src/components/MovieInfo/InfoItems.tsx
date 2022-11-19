import React from 'react'
import { MovieDetailType } from '../../types'

import styles from './MovieInfo.module.scss'


const formatter = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
})


type PropsType = {
  details: MovieDetailType | undefined
 
}


const InfoItems = ({details} : PropsType) => {

  const items = [
    {caption: `Country`, value: `${details?.production_countries.map((c) => ` ${c.name}`)}`,},
    {caption: `Production Companys`, value: `${details?.production_companies.map((c) => ` ${c.name}`)} `,},
    {caption: `Runtime`, value: `${details?.runtime} min` },
    {caption: `Genres`, value: `${details?.genres.map((g) => ` ${g.name}`)}` },
    //@ts-ignore
    {caption: `Budget`, value: `${formatter.format(details?.budget)}` },
    //@ts-ignore
    {caption: `Revenue`, value: `${formatter.format(details?.revenue)}` },
  ]

  return (
    <>
    {items.map((item) => (
      <div className={styles.info} key={item.caption}>
        <span>{item.caption}</span>
        <i>{item.value}</i>
      </div>
    ))}</>
  )
}

export default InfoItems