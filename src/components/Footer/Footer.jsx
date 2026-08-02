import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import logoImg from '../../assets/footerLogo.png';

const Footer = () => {

  return (

    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Grid Section */}
        <div className={styles.topGrid}>

          {/* Brand Info */}
          <div className={styles.brandColumn}>
            <Link to="/" className={styles.logoLink}>
              <img src={logoImg} alt="TRAVELSCAPE" className={styles.logo} />
            </Link>
            <p className={styles.tagline}>
              AI-powered travel planning for the modern explorer.
            </p>
          </div>

          {/* Product Links */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>PRODUCT</h4>
            <ul className={styles.linkList}>
              <li><Link to="/destinations" className={styles.link}>Destinations</Link></li>
              <li><Link to="/blog" className={styles.link}>Blog</Link></li>
              <li><Link to="/faq" className={styles.link}>FAQ</Link></li>
              <li><Link to="/signup" className={styles.link}>Sign Up</Link></li>
            </ul>
          </div>

          {/* Use Cases Links */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>USE CASES</h4>
            <ul className={styles.linkList}>
              <li><Link to="/groupTrip" className={styles.link}>Group Trip Planner</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>LEGAL</h4>
            <ul className={styles.linkList}>
              <li><Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
              <li><Link to="/terms" className={styles.link}>Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className={styles.link}>Cookie Policy</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <hr className={styles.divider} />

        {/* Trusted Partners Logos */}
        <div className={styles.partnersSection}>
          <span className={styles.partnersLabel}>TRUSTED PARTNERS</span>
          <div className={styles.partnerLogos}>
            <span className={`${styles.partnerText} ${styles.stripe}`}>stripe</span>
            <span className={`${styles.partnerText} ${styles.getYourGuide}`}>GetYourGuide</span>
            <span className={`${styles.partnerText} ${styles.booking}`}>Booking.com</span>
            <span className={`${styles.partnerBadge} ${styles.rvshare}`}>RVshare</span>
            <span className={`${styles.partnerBadge} ${styles.agoda}`}>agoda</span>
          </div>
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © 2026 Travelscape. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;