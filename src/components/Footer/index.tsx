import React from 'react'

import styles from './Footer.module.scss'

const Footer:React.FC = () => {
  return (
    <div className={styles.root}>

      <span>Powered by <a href="https://www.themoviedb.org/">THE MOVIE DATA BASE</a></span>
      <span>2022 React-Redux-Movies</span>
      
    </div>
  )
}


export default Footer