import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  {
    q: "What is Travelscape?",
    a: "Travelscape is an AI-powered travel planning app that builds personalized trip itineraries based on your preferences, budget, and travel style. Whether you know exactly where you want to go or you're starting from scratch with no idea at all, Travelscape's AI concierge builds a complete, customized itinerary through a natural conversation. Plan solo trips, collaborate with friends on group travel, connect with like-minded travelers near you, share your journeys with a community of real travelers, and discover new destinations — all in one place."
  },
  {
    q: "How is Travelscape different from other travel planning apps?",
    a: "Most travel planning tools either help you search for flights and hotels, or they generate a generic itinerary that looks the same for everyone. Travelscape does something different — it combines AI-powered personalized itinerary building with collaborative group planning, real traveler discovery, and a social travel community. You get a trip plan built specifically around you, tools to plan seamlessly with friends, the ability to connect with like-minded travelers wherever you are, and a community of real itineraries to inspire your next adventure. Everything lives in one place, so you're never juggling tabs, spreadsheets, and group chats."
  },
  {
    q: "Does Travelscape book hotels and activities?",
    a: "Travelscape curates and surfaces personalized recommendations for hotels, dining, and activities — all tailored to your preferences, travel style, and budget. You can save everything directly to your itinerary and book directly with the provider. We make it effortless to find exactly what you need without the endless searching."
  },
  {
    q: "What destinations does Travelscape cover?",
    a: "Travelscape covers every destination on earth. Whether you're planning a trip to Italy, Japan, Greece, Vietnam, Argentina, or an off-the-beaten-path destination most travel apps have never heard of — our AI builds personalized itineraries for all of them. Browse our Destinations page for inspiration, or just tell the AI where you want to go and let it handle the rest."
  },
];

export default function Section1() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>About Travelscape</h2>
      <div className={styles.cardList}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <button className={styles.button} onClick={() => toggle(index)}>
              <span className={styles.question}>{item.q}</span>
              <span className={`${styles.icon} ${openIndex === index ? styles.iconRotated : ""}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <p className={styles.answer}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}