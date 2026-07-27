import React from 'react'
import styles from '../Right/Right.module.css'

const Left = () => {
  return (
    <div className={styles.leftContainer}>
      <span className={styles.subTagline}>AI-POWERED TRIP PLANNING</span>
      
      <h1 className={styles.heading}>
        The free AI travel planner for your next adventure, <br />
        <em>all in one place.</em>
      </h1>

      <p className={styles.description}>
        Tell Travelscape's AI where you want to go. It builds your complete itinerary 
        — hotels, restaurants, activities, and things to do — instantly. Invite your 
        group, vote on the plan together, split the budget, and hit the road. Less 
        tabs, more trip.
      </p>

      {/* Input Box */}
      <div className={styles.searchBox}>
        <div className={styles.inputWrapper}>
          <span className={styles.plusIcon}>+</span>
          <input 
            type="text" 
            placeholder="Where to next?" 
            className={styles.inputField} 
          />
        </div>
        <button className={styles.submitBtn}>
          Start Planning Free &rarr;
        </button>
      </div>

      {/* Badges */}
      <div className={styles.badgeGroup}>
        <span className={styles.badge}>Group trip</span>
        <span className={styles.badge}>Honeymoon</span>
        <span className={styles.badge}>Solo escape</span>
        <span className={styles.badge}>Family</span>
        <span className={styles.badge}>Couple</span>
        <span className={styles.badge}>Road trip</span>
      </div>
    </div>
  )
}

export default Left