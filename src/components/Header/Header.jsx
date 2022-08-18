import React from 'react'
import styles from './styles.module.css'
import cross from '../../assets/cross.svg'
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={cross}></img>
      <h1>unit converter</h1>
    </header>
  )
}

export default Header
