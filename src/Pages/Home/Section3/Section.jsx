import React, { useRef } from 'react';
import { Sparkles, Users, MapPin, Compass, Heart, Sun } from 'lucide-react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './Section.module.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: 1,
    icon: Sparkles,
    title: 'AI-Powered Itineraries',
    subtitle: 'Personalized travel planning, built around you.',
    desc: "Describe your trip in plain language — a destination, a vibe, a budget, or nothing at all. Travelscape's AI trip planner asks the right questions and builds a complete, day-by-day personalized travel itinerary with curated recommendations for hotels, dining, and experiences tailored to your travel style. Edit anything, save your favorites, and fine-tune every detail until it's exactly right."
  },
  {
    id: 2,
    icon: Users,
    title: 'Collaborative Group Planning',
    subtitle: 'Group trip planning without the chaos.',
    desc: "Invite your friends and plan together in real time. Vote on destinations, hotels, restaurants, and activities — then track your shared trip budget and split expenses automatically. Chat in one place, keep everyone aligned, and go from first idea to final itinerary without a single group chat meltdown. Whether you're planning with two people or twenty, group travel has never been this effortless."
  },
  {
    id: 3,
    icon: MapPin,
    title: 'Meet Travelers Near You',
    subtitle: 'Find your people — wherever you are in the world.',
    desc: "Travelscape connects you with like-minded travelers in your area and at your destination. Browse nearby travelers by travel style, interests, and where they've been — and connect with people headed to the same places you are. Whether you're a solo traveler looking for a companion for the day, a group wanting to meet locals who know the scene, or just curious who else is exploring the same city right now — Travelscape makes the world feel a lot less like a solo experience."
  },
  {
    id: 4,
    icon: Compass,
    title: 'Explore & Discover',
    subtitle: "Find your next trip before you've even started planning.",
    desc: "Browse real itineraries shared by travelers who've been where you want to go. Explore destinations by travel style, trip length, and experience type — and use any itinerary you find as the starting point for your own. The best travel inspiration doesn't come from a blog. It comes from people who actually made the trip."
  },
  {
    id: 5,
    icon: Heart,
    title: 'Travel Community',
    subtitle: 'Share your journey. Inspire the next one.',
    desc: "Travelscape is built for the full travel experience — before, during, and after the trip. Share your itinerary publicly, post updates and photos from the road, connect with travelers headed to the same destination, and build a travel story that goes beyond the highlight reel. Your trips don't just live in an app — they inspire someone else's."
  },
  {
    id: 6,
    icon: Sun,
    title: 'Live Destination Intelligence',
    subtitle: "Real-time conditions, local events, and hidden gems — wherever you're headed.",
    desc: "Stay one step ahead with live weather, local events, trending restaurants, nightlife, and cultural experiences at your destination — all surfaced based on your interests and updated in real time. Whether you're still planning or already on the ground, Travelscape keeps you informed and helps you discover the places most travelers miss."
  }
];

const Section = () => {
  const containerRef = useRef();
  const headerRef = useRef();

  useGSAP(() => {
    // 1. Header Animation
    gsap.from(headerRef.current, {
      scale: 0,
      opacity: 0,
      filter: 'blur(18px)',
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 85%',
      }
    });

    const cards = gsap.utils.toArray(`.${styles.card}`);

    gsap.from(cards.slice(0, 3), {
      y: 50,
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      filter: 'blur(7px)',
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 85%',
        end: 'bottom 10%',
        scrub: 1
      }
    });

    gsap.from(cards.slice(3, 6), {
      y: 50,
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      filter: 'blur(18px)',
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cards[3],
        start: 'top 85%',
        end: 'bottom 10%',
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header} ref={headerRef}>
        <span className={styles.subTitle}>FEATURES</span>
        <h2 className={styles.heading}>
          Built for how people actually plan trips.
        </h2>
      </div>

      <div className={styles.grid}>
        {featuresData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.icon} size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardSubtitle}>{item.subtitle}</p>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;