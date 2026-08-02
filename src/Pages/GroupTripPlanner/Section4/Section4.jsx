import React, { useState } from "react";
import styles from "./Section.module.css";
import { ChevronDown } from "lucide-react";

const data = [
  {
    q: "What is the best app for planning a group trip?",
    a: "Travelscape is built specifically for group travel planning. Unlike general trip planners, Travelscape combines AI itinerary building, group voting, shared budget tracking, and in-app group chat in one place — so your whole crew can plan together without switching between five different apps.",
  },
  {
    q: "How do I plan a trip with a large group of friends?",
    a: "Start by creating a trip in Travelscape and sharing the invite link with your group. From there, everyone can vote on destinations and activities, add ideas to the shared itinerary, and track the group budget together — all in real time. You don't need to coordinate over text anymore.",
  },
  {
    q: "How do group members join a trip?",
    a: "The trip organizer creates the trip and shares one invite link. Every invited member can then view the itinerary, vote on options, and participate in the group chat.",
  },
  {
    q: "What makes Travelscape different from other group travel planning apps?",
    a: "Most group trip planners are really just shared documents with a voting widget bolted on. Travelscape is the only group travel planning app with a built-in AI that accounts for everyone's preferences — not just one person's — when building an itinerary. Combine that with real-time collaboration, group chat, and expense splitting, and you have a true end-to-end group trip planner.",
  },
  {
    q: "Can I control how much input my group has in the planning?",
    a: "Yes. As the trip organizer, you control how collaborative the planning gets. Open everything up to group votes, or keep control and just share the final itinerary — Travelscape works both ways.",
  },
];

export default function Section4() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionWrapper}>
        <h2 className={styles.categoryTitle}>
          Group Trip Planning — Frequently Asked Questions
        </h2>
        <div className={styles.cardList}>
          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <button className={styles.button} onClick={() => toggle(index)}>
                <span className={styles.question}>{item.q}</span>
                <span
                  className={`${styles.icon} ${
                    openIndex === index ? styles.iconRotated : ""
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
              {openIndex === index && (
                <p className={styles.answer}>{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}