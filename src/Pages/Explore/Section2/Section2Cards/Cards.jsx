import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);


import img1 from '../../../../assets/explore1.jpg';
import img2 from '../../../../assets/explore2.jpg';
import img3 from '../../../../assets/explore3.jpg';
import img4 from '../../../../assets/explore4.jpg';
import img5 from '../../../../assets/explore5.jpg';
import img6 from '../../../../assets/explore6.jpg';
import img7 from '../../../../assets/explore7.jpg';
import img8 from '../../../../assets/explore8.jpg';
import img9 from '../../../../assets/explore9.jpg';
import img10 from '../../../../assets/explore10.jpg';
import img11 from '../../../../assets/explore11.jpg';
import img12 from '../../../../assets/explore12.jpg';
import img13 from '../../../../assets/explore13.jpg';

import styles from '../Section.module.css'

const cardsData = [
  { id: 1, type: 'card', title: 'Croatia', days: '10 days', bgImage: img1 },
  { id: 2, type: 'card', title: 'Italy', days: '8 days', bgImage: img2 },
  { id: 3, type: 'card', title: 'Greece', days: '12 days', bgImage: img3 },
  { id: 4, type: 'card', title: 'Sardinia', days: '10 days', bgImage: img4 },
  { id: 5, type: 'card', title: 'Bali', days: '10 days', bgImage: img5 },
  { id: 6, type: 'card', title: 'Madeira', days: '7 days', bgImage: img6 },

  { id: 'cta-1', type: 'cta' },

  { id: 7, type: 'card', title: 'Big Sky, Montana', days: '7 days', bgImage: img7 },
  { id: 8, type: 'card', title: 'Lisbon', days: '5 days', bgImage: img8 },
  { id: 9, type: 'card', title: 'Croatia', days: '7 days', bgImage: img9 },
  { id: 10, type: 'card', title: 'Croatia', days: '7 days', bgImage: img10 },
  { id: 11, type: 'card', title: 'Croatia', days: '7 days', bgImage: img11 },
  { id: 12, type: 'card', title: 'Croatia', days: '7 days', bgImage: img12 },

  { id: 'cta-2', type: 'cta' },

  { id: 14, type: 'card', title: 'Croatia', days: '7 days', bgImage: img13 },
];

const Cards = () => {

  const cardsContainerRef = useRef(null);
  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const cardElements = container.children;

    ScrollTrigger.batch(cardElements, {
      onEnter: (batch) => {
        gsap.from(batch, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      },
      once: true,
    });
  }, []);
  return (

    <div ref={cardsContainerRef} className={styles.cardsFlexContainer}>
      {cardsData.map((item) => {
        if (item.type === 'cta') {
          return (
            <div key={item.id} className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Planning a trip?</h3>
              <p className={styles.ctaDesc}>
                Share your itinerary with the Travelscape community and inspire other travelers.
              </p>
              <button className={styles.ctaBtn}>
                Start Planning →
              </button>
            </div>
          );
        }

        return (
          <div key={item.id} className={styles.cardItem}>
            <div
              className={styles.cardImageArea}
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.cardDays}>{item.days}</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span>— Travelscape</span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Cards
