import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  { q: "How smart is the AI assistant?", a: "Our AI is trained on extensive travel data to provide accurate local insights and itineraries." },
  { q: "Can the AI generate budget-friendly trips?", a: "Yes, you can set a budget limit and it will prioritize low-cost activities." },
  { q: "Does it support real-time chat?", a: "Yes, you can chat with the AI assistant anytime during your trip." },
  { q: "Can I generate itineraries in different languages?", a: "Yes, the AI assistant supports over 20 global languages." },
];

export default function Section3() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>AI Travel Assistant</h2>
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