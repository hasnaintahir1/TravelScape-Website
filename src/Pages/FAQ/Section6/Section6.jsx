import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  { q: "Is Travelscape free to use?", a: "Yes, Travelscape offers a robust free tier along with Pro subscription options." },
  { q: "How do I upgrade to Travelscape Pro?", a: "You can upgrade directly from your account settings dashboard." },
  { q: "What is your refund policy?", a: "We offer a 14-day money-back guarantee for all paid subscription plans." },
  { q: "How do I delete my account?", a: "Account deletion can be requested from the Privacy Settings section." },
];

export default function Section6() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>Account & Subscriptions</h2>
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