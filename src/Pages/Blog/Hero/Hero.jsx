import React from 'react';
import styles from './Hero.module.css';
import heroBg from '../../../assets/blog.jpg';

const Hero = () => {
  return (
    <section 
      className={styles.heroContainer} 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay for contrast if needed */}
      <div className={styles.bgOverlay}></div>

      {/* Center Floating Card */}
      <div className={styles.centerCard}>
        
        {/* Left Side: Typography & Details */}
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            TRAVEL<br />JOURNAL
          </h1>

          <div className={styles.journalMeta}>
            <div className={styles.tagGroup}>
              <span className={styles.latestTag}>LATEST</span>
              <span className={styles.dateTag}>(07/31/26)</span>
            </div>

            <p className={styles.articleTitle}>
              Bangkok Travel Guide: Everything You Need to Know Before You Go
            </p>

            <button className={styles.readBtn}>
              READ →
            </button>
          </div>
        </div>

        {/* Right Side: Featured Image */}
        <div 
          className={styles.imageContent} 
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>

      </div>
    </section>
  );
};

export default Hero;