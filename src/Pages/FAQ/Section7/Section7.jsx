import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  { q: "Does Travelscape provide safety warnings?", a: "Yes, we provide up-to-date travel advisories and health guidelines." },
  { q: "Can I access emergency numbers?", a: "Local emergency contact numbers are saved automatically for your trip destination." },
  { q: "How accurate is local travel information?", a: "Data is updated regularly from official tourism boards and community feedback." },
  { q: "Are solo travel safety tips included?", a: "Yes, we offer tailored advice for solo travelers based on safety ratings." },
];

export default function Section7() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>Safety & Local Guidelines</h2>
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