import React from 'react'
import styles from './Right.module.css'

import img1 from '../../../../assets/HomeHero1.jpg'
import img2 from '../../../../assets/HomeHero2.jpg'
import img3 from '../../../../assets/HomeHero3.jpg'
import img4 from '../../../../assets/HomeHero4.jpg'
import img5 from '../../../../assets/HomeHero5.jpg'

const Right = () => {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.galleryGrid}>
        
        <div className={`${styles.card} ${styles.archCard}`}>
          <img 
            src={img1} 
            alt="Positano" 
          />
          <span className={styles.cardLabel}>Positano</span>
        </div>

        <div className={`${styles.card} ${styles.topWideCard}`}>
          <img 
            src={img2} 
            alt="Halong Bay" 
          />
          <span className={styles.cardLabel}>Halong Bay</span>
        </div>

        <div className={`${styles.card} ${styles.bottomArchCard}`}>
          <img 
            src={img3} 
            alt="Tokyo" 
          />
          <span className={styles.cardLabel}>Tokyo</span>
        </div>

        <div className={`${styles.card} ${styles.tallRightCard}`}>
          <img 
            src={img4} 
            alt="Amalfi Coast" 
          />
          <span className={styles.cardLabel}>Amalfi Coast</span>
        </div>

        <div className={`${styles.card} ${styles.bottomWideCard}`}>
          <img 
            src={img5} 
            alt="Marrakech" 
          />
          <span className={styles.cardLabel}>Marrakech</span>
        </div>

      </div>

      <div className={styles.partners}>
        <span className={styles.partnerHeading}>TRUSTED PARTNERS</span>
        <div className={styles.partnerLogos}>
          <span className={styles.stripeLogo}>stripe</span>
          <span className={styles.getYourGuideLogo}>GetYourGuide</span>
          <span className={styles.bookingLogo}>Booking.com</span>
        </div>
      </div>
    </div>
  )
}

export default Right