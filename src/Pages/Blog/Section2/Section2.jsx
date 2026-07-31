import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

import img1 from '../../../assets/blog1.jpg';
import img2 from '../../../assets/blog2.jpg';
import img3 from '../../../assets/blog3.jpg';
import img4 from '../../../assets/blog4.jpg';
import img5 from '../../../assets/blog5.jpg';
import img6 from '../../../assets/blog6.jpg';
import img7 from '../../../assets/blog7.jpg';
import img8 from '../../../assets/blog8.jpg';
import img9 from '../../../assets/blog9.jpg';
import img10 from '../../../assets/blog10.jpg';
import img11 from '../../../assets/blog11.jpg';
import img12 from '../../../assets/blog12.jpg';
import img13 from '../../../assets/blog13.jpg';
import img14 from '../../../assets/blog14.jpg';
import img15 from '../../../assets/blog15.jpg';
import img16 from '../../../assets/blog16.jpg';
import img17 from '../../../assets/blog17.jpg';
import img18 from '../../../assets/blog18.jpg';
import img19 from '../../../assets/blog19.jpg';
import img20 from '../../../assets/blog20.jpg';


import styles from './Section.module.css';

const articlesData = [
    {
        id: 1,
        category: 'DESTINATION',
        readTime: '10 min read',
        date: 'July 31, 2026',
        title: 'Bangkok Travel Guide: Everything You Need to Know Before You Go',
        desc: 'Bangkok is the most-visited city on the planet — here is where to stay, what to eat, how to get around, and the day trips worth building in.',
        tags: ['BANGKOK TRAVEL GUIDE', 'THINGS TO DO IN BANGKOK', 'BANGKOK NEIGHBORHOODS'],
        bgImage: img1
    },
    {
        id: 2,
        category: 'DESTINATION',
        readTime: '11 min read',
        date: 'July 28, 2026',
        title: 'Route 66 Road Trip: The Ultimate 100th Anniversary Itinerary',
        desc: 'Route 66 turns 100 in 2026. Here is the complete state-by-state road trip itinerary, plus every centennial event worth building your trip around.',
        tags: ['ROUTE 66 ROAD TRIP ITINERARY', 'ROUTE 66 100TH ANNIVERSARY'],
        bgImage: img2
    },
    {
        id: 3,
        category: 'DESTINATION',
        readTime: '8 min read',
        date: 'July 24, 2026',
        title: 'Coolcation: The Best Cool-Weather Destinations for Summer 2026',
        desc: 'Skip the heatwave. Iceland, Norway, Switzerland, Alaska, and Canada are 2026’s top coolcation picks — and how to plan your own cool-weather trip.',
        tags: ['COOLCATION', 'ICELAND', 'NORWAY'],
        bgImage: img3
    },
    {
        id: 4,
        category: 'DESTINATION',
        readTime: '9 min read',
        date: 'July 20, 2026',
        title: 'Kyoto Travel Guide: Hidden Temples and Historic Streets',
        desc: 'Discover quiet tea houses, serene bamboo groves, and traditional ryokans away from the crowds.',
        tags: ['KYOTO', 'JAPAN', 'CULTURE'],
        bgImage: img4
    },
    {
        id: 5,
        category: 'DESTINATION',
        readTime: '7 min read',
        date: 'July 18, 2026',
        title: 'Amalfi Coast Road Trip: Coastal Views and Italian Charm',
        desc: 'Drive along dramatic cliffs, visit colorful fishing villages, and taste authentic lemon granita.',
        tags: ['ITALY', 'AMALFI', 'ROAD TRIP'],
        bgImage: img5
    },
    {
        id: 6,
        category: 'DESTINATION',
        readTime: '12 min read',
        date: 'July 15, 2026',
        title: 'Swiss Alps Hiking Guide: Best Trails for Summer',
        desc: 'Explore pristine alpine lakes, majestic mountain peaks, and scenic train rides across Switzerland.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img6
    },
    {
        id: 7,
        category: 'Group Travel',
        readTime: '10 min read',
        date: 'Junr 25, 2026',
        title: 'Best Group Travel Destinations for 2026',
        desc: 'From Lisbon to Bali, here are the best group travel destinations for 2026 — plus how to pick the right spot for a big crew or a small one, and plan it without the chaos.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img7
    },
    {
        id: 8,
        category: 'How To',
        readTime: '16 min read',
        date: 'Sep 19, 2021',
        title: 'New Zealand vs Australia: Which Should You Visit First?',
        desc: 'Learn how to share your travel itinerary the right way — so your group actually looks at it, weighs in, and helps you build a better trip.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img8
    },
    {
        id: 9,
        category: 'Comparison',
        readTime: '6 min read',
        date: 'May 13, 2026',
        title: 'Swiss Alps Hiking Guide: Best Trails for Summer',
        desc: 'Compare New Zealand and Australia across landscapes, wildlife, cities, and logistics to decide which South Pacific trip belongs first on your bucket list.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img9
    },
    {
        id: 10,
        category: 'Group Travel',
        readTime: '52 min read',
        date: 'Nov 2, 2023',
        title: 'Group Travel Tips: How to Keep Everyone Happy on a Trip',
        desc: 'Planning a group trip? These group travel tips help you set budgets, settle debates, build in solo time, and actually enjoy the trip — without the chaos.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img10
    },
    {
        id: 11,
        category: 'DESTINATION',
        readTime: '2 min read',
        date: 'June 15, 2026',
        title: 'The Complete 2-Week Spain Itinerary: Barcelona to Seville',
        desc: 'The complete 2 week Spain itinerary — Barcelona, Madrid, Toledo, Seville, Granada, and the coast. Day-by-day route, trains, and timing. Plan it with AI.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img11
    },
    {
        id: 12,
        category: 'DESTINATION',
        readTime: '31 min read',
        date: 'April 22, 2025',
        title: 'Swiss Alps Hiking Guide: Best Trails for Summer',
        desc: 'Explore pristine alpine lakes, majestic mountain peaks, and scenic train rides across Switzerland.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img12
    },
    {
        id: 13,
        category: 'How To',
        readTime: '29 min read',
        date: 'Oct 1, 2026',
        title: 'How to Plan a Trip When You Have No Idea Where to Go',
        desc: "Don't know where to go on your trip? Here's how to choose a travel destination using your budget, your vibe, and a little AI help — no spreadsheet required.",
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img13
    },
    {
        id: 14,
        category: 'DESTINATION Guides',
        readTime: '10 min read',
        date: 'March 4, 2026',
        title: 'Best Time to Visit Vietnam: North vs South Explained',
        desc: "Vietnam's weather varies wildly by region. Find the best time to visit Hanoi, Hoi An, Ho Chi Minh City, and Ha Long Bay — plus a month-by-month guide.",
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img14
    },
    {
        id: 15,
        category: 'DESTINATION',
        readTime: '33 min read',
        date: 'Dec 12, 2006',
        title: 'Swiss Alps Hiking Guide: Best Trails for Summer',
        desc: 'Explore pristine alpine lakes, majestic mountain peaks, and scenic train rides across Switzerland.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img15
    },
    {
        id: 16,
        category: 'Inspiration',
        readTime: '9 min read',
        date: 'Jan 8, 2023',
        title: 'Travel Bucket List: 20 Destinations to Visit Before Youre 40',
        desc: "20 bucket list destinations every traveler should see before 40 — from Japan's cherry blossoms to Patagonia. Plan any of these trips with Travelscape.",
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img16
    },
    {
        id: 17,
        category: 'DESTINATION',
        readTime: '20 min read',
        date: 'Feb 5, 2022',
        title: 'Swiss Alps Hiking Guide: Best Trails for Summer',
        desc: 'Explore pristine alpine lakes, majestic mountain peaks, and scenic train rides across Switzerland.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img17
    },
    {
        id: 18,
        category: 'Europe Trip',
        readTime: '10 min read',
        date: 'Augest 25, 2006',
        title: '7-Day Paris Itinerary: The Perfect First-Timers Guide',
        desc: 'A day-by-day 7-day Paris itinerary covering the Eiffel Tower, Louvre, Montmartre, Versailles, and the neighborhoods most tourists miss.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img18
    },
    {
        id: 19,
        category: 'Comparison',
        readTime: '12 min read',
        date: 'July 1, 2024',
        title: 'Solo Travel vs Group Travel: Which Is Right for You?',
        desc: "Solo travel or group travel — both have real advantages and real trade-offs. Here's an honest comparison to help you decide which works for your next trip.",
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img19
    },
    {
        id: 20,
        category: 'DESTINATION',
        readTime: '2 min read',
        date: 'June 15, 2021',
        title: 'Swiss Alps Hiking Guide: Best Trails for Summer',
        desc: 'Explore pristine alpine lakes, majestic mountain peaks, and scenic train rides across Switzerland.',
        tags: ['SWITZERLAND', 'HIKING', 'ALPS'],
        bgImage: img20
    }
];

const Section2 = () => {
    const cardsContainerRef = useRef(null);
useEffect(() => {
    const container = cardsContainerRef.current;

    if (!container) return;

    const cardElements = gsap.utils.toArray(container.children);

    const ctx = gsap.context(() => {
        cardElements.forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    once: true,
                },
            });
        });
    }, container);

    return () => ctx.revert();
}, []);

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.mainWrapper}>

                {/* Top Search & Filter Bar */}
                <div className={styles.topBar}>
                    <div className={styles.searchWrapper}>
                        <span className={styles.searchIcon}></span>
                        <input
                            type="text"
                            placeholder="Search articles, cities, food, topics..."
                            className={styles.searchInput}
                        />
                    </div>

                    <div className={styles.filterWrapper}>
                        <span>Filter by:</span>
                        <select className={styles.filterSelect}>
                            <option>All</option>
                            <option>Destinations</option>
                            <option>Food</option>
                            <option>Road Trips</option>
                        </select>
                    </div>
                </div>

                {/* Cards List */}
                <div ref={cardsContainerRef} className={styles.cardsFlexContainer}>
                    {articlesData.map((item) => (
                        <div key={item.id} className={styles.articleCard}>

                            {/* Left Image Area */}
                            <div
                                className={styles.cardImageArea}
                                style={{ backgroundImage: `url(${item.bgImage})` }}
                            />

                            {/* Right Content Area */}
                            <div className={styles.cardContentArea}>
                                <div className={styles.cardMeta}>
                                    <span className={styles.category}>{item.category}</span>
                                    <span>⏱ {item.readTime}</span>
                                    <span>{item.date}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>

                                <div className={styles.cardTags}>
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className={styles.tagPill}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Section2;