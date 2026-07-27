import React, { useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './Section.module.css';

import bgImage from '../../../assets/6img.jpg'; 

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const subtextRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {

    gsap.from(headingRef.current, {
      x: 80,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });
    gsap.from(subtextRef.current, {
      y: 80,
      opacity:0,
      duration: 0.8,
      delay:.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });
    gsap.from(buttonRef.current, {
      y: 70,
      opacity:0,
      duration: 0.8,
      delay:.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      className={styles.section} 
      ref={containerRef}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        {/* Main Serif Heading */}
        <h2 className={styles.heading} ref={headingRef}>
          You don't need a plan to start<br />planning.
        </h2>

        {/* Sub-description */}
        <p className={styles.subtext} ref={subtextRef}>
          Tell Travelscape where you want to go — or let the AI help you decide.
          Personalized itineraries, seamless group trip planning, and a community
          of real travelers, all in one place.
        </p>

        {/* Pill Button */}
        <button className={styles.ctaButton} ref={buttonRef}>
          <Sparkles className={styles.iconLeft} size={16} />
          <span>Start planning</span>
          <ArrowRight className={styles.iconRight} size={16} />
        </button>
      </div>
    </section>
  );
};

export default Section;