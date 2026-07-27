import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './Section.module.css';

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
  {
    num: '1',
    title: 'Describe Your Dream Trip',
    desc: "You don't need a plan to start planning. Tell our AI trip planner where you want to go, what kind of experience you're after, and what you want to spend — or start with nothing at all. A natural conversation builds your personalized itinerary from scratch. No overwhelm, no guesswork."
  },
  {
    num: '2',
    title: 'Explore & Customize Your Itinerary',
    desc: "Get a fully personalized travel itinerary with curated recommendations for hotels, dining, and activities — all organized by day and tailored to your budget and travel style. Save your favorites, swap anything that doesn't fit, track your total trip cost, and fine-tune every detail until it's exactly right."
  },
  {
    num: '3',
    title: 'Plan Together, Travel Better',
    desc: "Invite your friends to collaborate in real time. Vote on options, chat in one place, track your shared budget, and check live conditions at your destination. Group trip planning has never been this effortless."
  },
  {
    num: '4',
    title: 'Travel — Your Live Companion',
    desc: "Once you're on the road, your itinerary, travel advisories, and what's happening nearby come alive — updated in real time and available even offline. Today's plan, weather, flight changes, and local discoveries, all in one screen."
  }
];

const Section = () => {
  const containerRef = useRef();
  const headerRef = useRef();

  useGSAP(() => {

    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 85%',
      }
    });

   const cards = gsap.utils.toArray('.step-card');
   cards.forEach((card, index)=>{
    gsap.from(card, {
        y:100,
        opacity:0,
        filter: 'blur(8px)',
        duration: 1,
        ease:'power3.out',
        scrollTrigger:{
            trigger:card,
            start: 'top 95%',
        }
    })
   }) 

  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header} ref={headerRef}>
        <span className={styles.subTitle}>HOW IT WORKS</span>
        <h2 className={styles.heading}>
          Four steps to your <br />
          <em>perfect trip.</em>
        </h2>
      </div>

      <div className={styles.stepsContainer}>
        {stepsData.map((step) => (
          <div key={step.num} className={`${styles.stepBox} step-card`}>
            <span className={styles.bgNumber}>{step.num}</span>

            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;