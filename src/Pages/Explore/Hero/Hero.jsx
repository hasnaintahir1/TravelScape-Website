import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Hero.module.css';

import img1 from '../../../assets/exploreHero1.jpg'
import img2 from '../../../assets/exploreHero2.jpg'
import img3 from '../../../assets/exploreHero3.jpg'
import img4 from '../../../assets/exploreHero4.jpg'
import img5 from '../../../assets/exploreHero5.jpg'

const slidesData = [
  {
    id: 1,
    subtitle: 'THE ETERNAL ALLURE',
    title: 'Italy',
    description:
      'From the ruins of Rome to the canals of Venice and the cliffs of the Amalfi Coast — plan your Italy travel itinerary with AI and experience la dolce vita at every turn.',
    buttonText: 'Plan your Italy trip',
    bgImage: img1,
  },
  {
    id: 2,
    subtitle: 'THE LAND OF RISING SUN',
    title: 'Japan',
    description:
      'Experience the perfect blend of ultra-modern technology and timeless traditions, from bustling Tokyo to peaceful Kyoto temples.',
    buttonText: 'Plan your Japan trip',
    bgImage: img2,
  },
  {
    id: 3,
    subtitle: 'Ancient Temples, Neon Streets',
    title: 'Tokyo',
    description:
      "Shibuya Crossing's controlled chaos, Asakusa's centuries-old shrines, and the best food city on earth. Plan your Tokyo trip with AI — Michelin sushi to seven-seat ramen counters, all on your terms.",
    buttonText: 'Plan your Tokyo trip',
    bgImage: img3,
  },
  {
    id: 4,
    subtitle: 'Art, Wine & Endless Beauty',
    title: 'France',
    description:
      "From the boulevards of Paris to the lavender fields of Provence and the glamour of the Riviera — your personalized France travel itinerary starts with a single conversation.",
    buttonText: 'Plan your France trip',
    bgImage: img4,
  },
  {
    id: 5,
    subtitle: 'Passion at Every Corner',
    title: 'Spain',
    description:
      "From the boulevards of Paris to the lavender fields of Provence and the glamour of the Riviera — your personalized France travel itinerary starts with a single conversation.",
    buttonText: 'Plan your Spain trip',
    bgImage: img5,
  },
];

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.heroContainer}>
      <Swiper
        modules={[Navigation]}
        /* onBeforeInit issue ko 100% resolve kar deta hai */
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        speed={800}
        className={styles.swiperWrapper}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Dark Overlay */}
              <div className={styles.overlay}></div>

              {/* Left Side Content */}
              <div className={styles.content}>
                <span className={styles.subtitle}>{slide.subtitle}</span>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.description}>{slide.description}</p>
                <button className={styles.actionBtn}>
                  ✨ {slide.buttonText} <span className={styles.btnArrow}>→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons linked via Refs */}
        <div className={styles.navigationControls}>
          <button
            ref={prevRef}
            className={`${styles.navBtn} ${styles.customPrev}`}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            ref={nextRef}
            className={`${styles.navBtn} ${styles.customNext}`}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;