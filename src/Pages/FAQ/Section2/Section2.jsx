import React, { useState } from "react";
import styles from "../Faq.module.css";

const data = [
  {
    q: "Does Travelscape have a road trip planner?",
    a: "Yes — Travelscape has an AI road trip planner at travelscape.ai/road-trip-planner. Describe your route, how long you're driving each day, and what kind of accommodation you want. The AI builds a complete day-by-day road trip itinerary with stops, hotels, and activities."
  },
  {
    q: "How does the road trip planner work?",
    a: "Describe your route, your daily driving limit, and the kind of stops you want. Travelscape builds a complete day-by-day road trip itinerary with stops, hotels, and activities."
  },
  {
    q: "Can I plan a road trip with multiple stops?",
    a: "Yes — Travelscape supports unlimited stops. Build your full multi-stop route, organized day by day with estimated drive times between each location."
  },
  {
    q: "Can I plan a road trip with friends?",
    a: "Absolutely. Invite your travel crew to join the plan, vote on stops together, and track your shared budget — all in one place."
  },
  {
    q: "Does the road trip planner work for international road trips?",
    a: "Yes. Travelscape plans road trips anywhere in the world — Iceland's Ring Road, the Scottish Highlands, New Zealand's South Island, or anywhere else you want to drive."
  },
  {
    q: "How does the AI road trip planner work?",
    a: "Tell Travelscape's AI where you're starting, where you're headed, and how you're traveling — hotels, camping, or RV. It builds your complete route with day-by-day stops, accommodation, and activities. You can edit anything and share the plan with your crew."
  },
];

export default function Section2() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index)=>{
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.categoryTitle}>Road Trip Planner</h2>
      <div className={styles.cardList}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <button className={styles.button} onClick={() => toggle(index)}>
              <span className={styles.question}>{item.q}</span>
              <span className={`${styles.icon} ${openIndex === index ? styles.iconRotated : ""}`}>
                ▼
              </span>
            </button>
            {openIndex === index && <p className={styles.answer}>{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}