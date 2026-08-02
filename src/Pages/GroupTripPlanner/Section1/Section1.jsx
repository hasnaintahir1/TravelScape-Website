import React from "react";
import styles from "./Section.module.css";
import { UserPlus, CheckSquare, Calendar, DollarSign } from "lucide-react";

const stepsData = [
  {
    step: "STEP 01",
    icon: <UserPlus size={20} strokeWidth={2} />,
    title: "Invite Your Friends",
    description:
      "Share one link and your whole group joins instantly. Every member can view, vote, and chat. Whether you're planning with 3 people or 30, everyone's in.",
  },
  {
    step: "STEP 02",
    icon: <CheckSquare size={20} strokeWidth={2} />,
    title: "Vote on Everything",
    description:
      "Destinations, hotels, restaurants, activities — put it all to a vote. Everyone ranks their favorites and the group decides together. No more one person making all the calls. No more endless back-and-forth. The best option wins, and everyone feels heard.",
  },
  {
    step: "STEP 03",
    icon: <Calendar size={20} strokeWidth={2} />,
    title: "Build the Itinerary Together",
    description:
      "Add, remove, and reorder plans in real time. Every member sees the same live group itinerary. Travelscape's AI surfaces recommendations based on what your group actually likes — not just one person's preferences. Collaborative trip planning that works the way your group does.",
  },
  {
    step: "STEP 04",
    icon: <DollarSign size={20} strokeWidth={2} />,
    title: "Split Costs Fairly",
    description:
      "Log expenses as you go, split automatically, and see exactly who owes what — before it becomes awkward. Travelscape's built-in expense splitter keeps your group's budget transparent from day one. No spreadsheets. No Venmo arguments after the trip.",
  },
];

export default function Section1() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionWrapper}>
        {/* Header Part */}
        <div className={styles.header}>
          <p className={styles.subTitle}>HOW IT WORKS</p>
          <h2 className={styles.title}>
            How to Plan a Group Trip with Travelscape
          </h2>
          <p className={styles.description}>
            Four steps. Zero chaos. One trip everyone's actually excited about.
          </p>
        </div>

        {/* 2x2 Step Cards Layout via Flexbox */}
        <div className={styles.cardListFlex}>
          {stepsData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{item.icon}</div>
                <span className={styles.stepTag}>{item.step}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}