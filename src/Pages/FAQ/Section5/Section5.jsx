import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  { q: "Does Travelscape book hotels directly?", a: "We aggregate top providers so you can compare prices and book securely." },
  { q: "Can I filter accommodations by style?", a: "Yes, filter by boutique hotels, hostels, luxury resorts, or rentals." },
  { q: "Does it show guest reviews?", a: "Yes, ratings and verified guest reviews are aggregated for easy viewing." },
  { q: "Are there exclusive travel discounts?", a: "Pro members get access to special travel deals and discounted hotel rates." },
];

export default function Section5() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>Hotels & Accommodation</h2>
      <div className={styles.cardList}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <button className={styles.button} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <span className={styles.question}>{item.q}</span>
              <span className={`${styles.icon} ${openIndex === index ? styles.iconRotated : ""}`}>▼</span>
            </button>
            {openIndex === index && <p className={styles.answer}>{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}