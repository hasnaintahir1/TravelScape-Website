import React from "react";
import styles from "./Faq.module.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";
import Section8 from "./Section8/Section8";

export default function Faq() {
  return (
    <div className={styles.container}>
      {/* Top Heading */}
      <div className={styles.header}>
        <p className={styles.subTitle}>SUPPORT</p>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.description}>
          Everything you need to know about Travelscape — from how our AI trip planner works to group planning and getting started.
        </p>
      </div>
      <div className={styles.wrapper}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </div>
  );
}