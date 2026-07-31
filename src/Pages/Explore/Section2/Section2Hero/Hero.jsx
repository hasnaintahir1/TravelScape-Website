import React from 'react'
import styles from '../Section.module.css'

const Hero = () => {
  return (
      <div className={styles.header}>
              <h2 className={styles.heading}>Explore the community</h2>
              <p className={styles.subHeading}>
                Real itineraries from real travelers — search by destination, travel style, or trip length.
              </p>
    
              <div className={styles.searchWrapper}>
                <input
                  type="text"
                  placeholder="Search destinations, trip types, or traveler styles..."
                  className={styles.searchInput}
                />
              </div>
    
              <div className={styles.filterControls}>
                <div className={styles.dropdownGroup}>
                  <select className={styles.filterSelect}>
                    <option>All Regions</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </select>
    
                  <select className={styles.filterSelect}>
                    <option>Any Length</option>
                    <option>1-5 Days</option>
                    <option>6-10 Days</option>
                  </select>
    
                  <select className={styles.filterSelect}>
                    <option>Any Style</option>
                    <option>Adventure</option>
                    <option>Relaxation</option>
                  </select>
                </div>
    
                <div className={styles.pillTabs}>
                  <button className={`${styles.pillBtn} ${styles.activePill}`}>Top Rated</button>
                  <button className={styles.pillBtn}>Most Liked</button>
                  <button className={styles.pillBtn}>Most Recent</button>
                  <button className={styles.pillBtn}>Trending</button>
                </div>
              </div>
            </div>
  )
}

export default Hero
