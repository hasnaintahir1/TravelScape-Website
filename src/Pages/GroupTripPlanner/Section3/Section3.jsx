import React, { useEffect, useRef } from "react";
import styles from "./Section.module.css";
import { Users, Sliders, Sparkles, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    icon: <Users size={20} strokeWidth={2} />,
    title: "The Trip Organizer Finally Has Backup",
    description:
      "You don't have to carry the whole trip alone. Start the itinerary, invite your friends, and let everyone pull their weight — votes, budget tracking, group chat, and planning all happen together in one place. You stay in charge. Everyone else actually helps.",
  },
  {
    icon: <Sliders size={20} strokeWidth={2} />,
    title: "Your Group. Your Rules.",
    description:
      "Some groups want everyone to vote on everything. Some want one person to make the final call. Travelscape works both ways. The trip organizer controls exactly how collaborative the planning gets — full democracy or benevolent dictatorship, you decide.",
  },
  {
    icon: <Sparkles size={20} strokeWidth={2} />,
    title: "The AI That Works for Your Whole Group — Not Just One Person",
    description:
      "Most travel apps build an itinerary for one traveler. Travelscape's AI is built for groups. Tell it who's coming, what everyone's into, and what the budget looks like — it builds a day-by-day group itinerary that actually balances competing preferences. No compromises, no drama.",
  },
  {
    icon: <Globe size={20} strokeWidth={2} />,
    title: "Find Your People at the Destination",
    description:
      "Not everyone in your group is traveling from the same city. Use the People page to connect with travelers already at your destination — meet locals, link up with other groups headed the same way, and build the trip out beyond your original group.",
  },
];

export default function Section3() {
  const containerRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.sectionContainer} ref={containerRef}>
      <div className={styles.sectionWrapper}>
        <h2 className={styles.title} ref={titleRef}>
          Built for Every Kind of Group Trip
        </h2>


        <div className={styles.cardListFlex}>
          {cardsData.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.iconBox}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}