import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  { q: "Can I invite friends to edit the trip?", a: "Yes, share a trip link with friends to collaborate in real-time." },
  { q: "How does group expense splitting work?", a: "Log expenses inside the app and it calculates who owes what automatically." },
  { q: "Is there a group chat feature?", a: "Yes, each trip comes with a dedicated discussion area." },
  { q: "Can I make my itineraries public?", a: "You can toggle itineraries between Public and Private anytime." },
];

export default function Section4() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>Group Travel & Sharing</h2>
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