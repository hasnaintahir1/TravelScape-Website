import React, { useEffect, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import styles from "./Section.module.css";

export default function Section5() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.ctaCard}>
        <h2 className={styles.title}>Ready to Plan Your Group Trip?</h2>
        <p className={styles.description}>
          Create an account, invite your friends, and let Travelscape's AI handle
          the hard part. Your group trip — without the group chat chaos.
        </p>
        <button className={styles.ctaButton}>
          <Sparkles size={16} color="#1c1917" />
          <span>Start Group Planning</span>
          <ArrowRight size={16} color="#1c1917" />
        </button>
      </div>
    </section>
  );
}