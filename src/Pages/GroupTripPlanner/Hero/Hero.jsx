import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { Sparkles } from "lucide-react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef(); 
  const lightTextRef = useRef();
  const bigTextRef = useRef();
  const paraTextRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {

    let ctx = gsap.context(() => {
      gsap.from( [lightTextRef.current, bigTextRef.current, paraTextRef.current, buttonRef.current,],{
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "all",
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroContainer} ref={containerRef}>
      <div className={styles.heroContent}>
        <p className={styles.subTitle} ref={lightTextRef}>
          AI-POWERED GROUP TRIP PLANNER
        </p>
        <h1 className={styles.title} ref={bigTextRef}>
          Group Trip Planner
        </h1>
        <p className={styles.description} ref={paraTextRef}>
          Stop managing 200 messages that go nowhere. Travelscape is the{" "}
          <span className={styles.highlightText}>AI group trip planner</span> that
          brings your whole group into one place — vote on destinations, build a shared
          itinerary, track the budget, and chat without switching apps. Group travel
          planning, finally solved.
        </p>
        <button className={styles.ctaButton} ref={buttonRef}>
          <Sparkles size={16} color="#1c1917" />
          <span>Start Group Planning</span>
          <span className={styles.arrowIcon}>→</span>
        </button>
      </div>
    </section>
  );
}