import React, { useEffect, useRef } from "react";

import styles from "./Section.module.css";

import { Check } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import img from '../../../assets/group-trip-.jpg'

const featuresData = [
  {
    text: "Invite unlimited friends with a single share link",
  },
  {
    text: "Vote on destinations, hotels, restaurants, and activities as a group",
  },
  {
    text: "AI trip planner that accounts for everyone's preferences, not just one person's",
  },
  {
    text: "Real-time group chat built into every trip — no need to leave the app",
  },
  {
    text: "Log and split expenses automatically so everyone knows where they stand",
  },
  {
    text: "Shared live itinerary visible to all group members",
  },
  {
    text: "Trip organizer controls — set how collaborative (or not) the planning gets",
  },
  {
    text: "Live destination conditions so your group can plan around what's actually happening",
  },
];

export default function Section2() {
  const containerRef = useRef();
  const titleRef = useRef();
  const listRef = useRef();
  const imageRef = useRef();

useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([titleRef.current, listRef.current, imageRef.current], {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.sectionContainer} ref={containerRef}>
      <div className={styles.sectionWrapper}>
        {/* Main Title */}
        <h2 className={styles.title} ref={titleRef}>
          Everything You Need to Plan a Group Vacation in One Place
        </h2>

        {/* 2 Columns Flex List */}
        <div className={styles.featureListFlex} ref={listRef}>
          {featuresData.map((item, index) => (
            <div key={index} className={styles.featureItem}>
              <Check className={styles.checkIcon} size={18} strokeWidth={2.5} />
              <p className={styles.featureText}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Image */}
        <div className={styles.imageWrapper} ref={imageRef}>
          <img
            src={img}
            alt="Group vacation on a boat"
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
}