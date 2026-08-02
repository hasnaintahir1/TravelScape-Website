import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  { q: "How can I contact customer support?", a: "You can reach out via our 24/7 help desk or email us at support@travelscape.com." },
  { q: "Where can I report a bug?", a: "Please use the 'Report an Issue' link in the footer or settings menu." },
  { q: "Can I request new features?", a: "You can submit and vote on feature requests in our community forum." },
  { q: "Is there a community forum for travelers?", a: "Yes, join our active global community to share itineraries and travel tips." },
];

export default function Section8() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>Support & Feedback</h2>
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