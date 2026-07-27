import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import styles from './Section.module.css';
import leftImg from '../../../assets/4Left.jpeg'
import rightImg from '../../../assets/4Right.jpeg'


const Section = () => {

    const containerRef = useRef();

    const Img1 = useRef();
    const leftContent = useRef();

    const Img2 = useRef();
    const rightContent = useRef();

    useGSAP(() => {
        gsap.from(Img1.current, {
            x: -80,
            opacity: 0,
            duration: .5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 90%',
            }
        });

        gsap.from(leftContent.current, {
            x:-80,
            opacity:0,
            delay:.8,
            duration:.5,
            scrollTrigger:{
                trigger: containerRef.current,
                start: 'top 90%'
            }
        });

        gsap.from(Img2.current, {
            x: 80,
            opacity: 0,
            duration: .5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 90%',
            }
        });

        gsap.from(rightContent.current, {
            y: 80,
            opacity: 0,
            delay: .8,
            duration: .8,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 90%',
            }
        })
    }, { scope: containerRef });


    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.gridContainer}>

                <div
                    className={`${styles.gridCard} ${styles.cardLeft}`}
                    style={{ backgroundImage: `url(${leftImg})` }}
                    ref={Img1}
                >
                    <div className={styles.overlayLeft} />

                    <div className={styles.contentTop} ref={leftContent}>
                        <span className={styles.tag}>AI ITINERARIES</span>
                        <h2 className={styles.heading}>
                            Curated experiences,<br />
                            not generic lists.
                        </h2>
                    </div>
                </div>

                <div
                    className={`${styles.gridCard} ${styles.cardRight}`}
                    style={{ backgroundImage: `url(${rightImg})` }}
                    ref={Img2}
                >
                    <div className={styles.overlayRight} />

                    <div className={styles.contentBottom} ref={rightContent}>
                        <span className={styles.tag}>TRAVEL TOGETHER</span>
                        <h2 className={styles.heading}>
                            Plan with friends.<br />
                            Share the adventure.
                        </h2>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section;