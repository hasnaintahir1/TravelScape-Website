import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import styles from './Section.module.css';

const Section = () => {

    const containerRef = useRef();
    const topText = useRef();
    const midText = useRef();
    const bottomText = useRef();

    useGSAP(() => {

        const targets = [topText.current, midText.current, bottomText.current];

        gsap.from(targets, {
            y: 80,
            opacity: 0,
            duration: .5,
            stagger: .5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 50%',
            }
        });

    }, { scope: containerRef });

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.container}>
                {/* Subtitle / Tag */}
                <span className={styles.subTitle} ref={topText}>
                    WHAT TRAVELERS SAY
                </span>

                {/* Main Quote */}
                <blockquote className={styles.quote} ref={midText}>
                    <span className={styles.boldText}>
                        "Travelscape planned our entire Sardinia trip.
                    </span>{' '}
                    <span className={styles.italicText}>
                        Every restaurant, every sunset view—it felt like a friend who knew us."
                    </span>
                </blockquote>

                {/* Author Info */}
                <p className={styles.author} ref={bottomText}>
                    — Evan B., <span className={styles.authorTitle}>avid traveler & early adopter</span>
                </p>
            </div>
        </section>
    );
};

export default Section;