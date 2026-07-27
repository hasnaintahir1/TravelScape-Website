import React, { useRef } from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import styles from './Section.module.css'
import img from '../../../assets/section1.jpeg'

const Section1 = () => {
    const container = useRef()
    const image = useRef()
    const tagline = useRef()
    const mainHeading = useRef()
    const divider = useRef()
    const description = useRef()

    useGSAP(() => {

        gsap.from(image.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: image.current,
                start: "top 90%",
            }
        })

        gsap.from(tagline.current, {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: tagline.current,
                start: "top 85%",
            }
        })

        gsap.from([mainHeading.current, divider.current, description.current], {
            y: 40,
            opacity: 0,
            filter: "blur(8px)",
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: mainHeading.current,
                start: "top 75%",
            }
        })

    }, { scope: container })

    return (
        <section className={styles.welcomeSection} ref={container}>
            <div className={styles.container}>

                <div className={styles.imageWrapper} ref={image}>
                    <img
                        src={img}
                        alt="Travelscape Beach"
                        className={styles.image}
                    />
                </div>

                <div className={styles.contentWrapper}>
                    <span className={styles.subTagline} ref={tagline}>
                        WELCOME TO TRAVELSCAPE
                    </span>

                    <h2 className={styles.heading} ref={mainHeading}>
                        Travel Planning, <br />
                        <em>Reimagined.</em>
                    </h2>

                    <div className={styles.divider} ref={divider}></div>

                    <p className={styles.description} ref={description}>
                        Most people spend 10+ hours researching a trip before booking a
                        single thing. Travelscape is the AI trip planner that gets you from idea
                        to full itinerary — personalized to your destination, your budget, and
                        how you actually like to travel. Intelligent itineraries built around you.
                        Seamless group trip planning that keeps everyone on the same page.
                        And a travel community that connects you with like-minded
                        travelers — at home, at your destination, and everywhere in between.
                    </p>
                </div>

            </div>
            
            <div className={styles.bottomLine}></div>
        </section>
    )
}

export default Section1