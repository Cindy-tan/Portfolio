import React, { useEffect, useState, useRef } from "react";
import styles from "./ScreenFour.module.css";
import MySvgLogo from "../MyLogo/LogoFile.js";


export default function ScreenFour() {
    const [inView, setInView] = useState(false);
    const screenTwoRef = useRef(null); 

    useEffect(() => {
        if (screenTwoRef.current) {
        const observer = new IntersectionObserver(
            (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setInView(true); 
            }
            },
            { threshold: 0.3 }
        );

        observer.observe(screenTwoRef.current);

        return () => {
            observer.disconnect();
        };
        }
    }, []);

    return (
        <div
        ref={screenTwoRef}
        className={`${styles.container} ${inView ? styles.activeSection : ""}`} 
        >
        {inView && (
            <>
                    <div className={styles.logoContainer}>
                        <MySvgLogo/> 
                    </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Greetings and Welcome!</h1>
                        <p className={styles.paragraph}>
                        <strong>Thank You</strong> for spreading some of your time going through my small introduction.
                            <br/>
                            <br/>
                        To learn more about me, my projects, and acquire contact form and resume, <strong>check out MY PORTFOLIO: </strong>
                        </p>
                    <button className={styles.button}>
                        <a href="https://cindymth.framer.website/" >LET'S GO</a>
                    </button>
                </div>
            </>
        )}
        </div>
    );
}
