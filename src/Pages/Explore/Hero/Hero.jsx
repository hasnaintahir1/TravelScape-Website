import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Hero.module.css';

const slidesData = [
  {
    id: 1,
    subtitle: 'THE ETERNAL ALLURE',
    title: 'Italy',
    description:
      'From the ruins of Rome to the canals of Venice and the cliffs of the Amalfi Coast — plan your Italy travel itinerary with AI and experience la dolce vita at every turn.',
    buttonText: 'Plan your Italy trip',
    bgImage:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 2,
    subtitle: 'THE LAND OF RISING SUN',
    title: 'Japan',
    description:
      'Experience the perfect blend of ultra-modern technology and timeless traditions, from bustling Tokyo to peaceful Kyoto temples.',
    buttonText: 'Plan your Japan trip',
    bgImage:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 3,
    subtitle: 'Ancient Temples, Neon Streets',
    title: 'Tokyo',
    description:
      "Shibuya Crossing's controlled chaos, Asakusa's centuries-old shrines, and the best food city on earth. Plan your Tokyo trip with AI — Michelin sushi to seven-seat ramen counters, all on your terms.",
    buttonText: 'Plan your Tokyo trip',
    bgImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_qPWHxbPvDNFAHDIysojSq9IFEc_agJABQ23237I-g&s=10',
  },
  {
    id: 4,
    subtitle: 'Art, Wine & Endless Beauty',
    title: 'France',
    description:
      "From the boulevards of Paris to the lavender fields of Provence and the glamour of the Riviera — your personalized France travel itinerary starts with a single conversation.",
    buttonText: 'Plan your France trip',
    bgImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbTbMAA0N-ptpe8G3I1FyWSQmZZV-vLxJ6cmO-kWytYR9EyzOPG19QgQ&s=10',
  },
  {
    id: 5,
    subtitle: 'Passion at Every Corner',
    title: 'Spain',
    description:
      "From the boulevards of Paris to the lavender fields of Provence and the glamour of the Riviera — your personalized France travel itinerary starts with a single conversation.",
    buttonText: 'Plan your Spain trip',
    bgImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEFtqWTJvsT2zSNt5i9_nuTt00UncpbicuYcUQ-Z39w&s=10',
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