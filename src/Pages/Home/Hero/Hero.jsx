import React from 'react'
import Left from './Left/Left'
import Right from './Right/Right'
import styles from './Right/Right.module.css'

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <Left />
      <Right />
    </div>
  )
}

export default Hero