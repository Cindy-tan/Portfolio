import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./ScreenThree.module.css";

export default function ScreenThree() {
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
            <TypeAnimation
            splitter={(str) => str.split(/(?= )/)}
            sequence={["A Digital Designer / Marketer.", 3000]}
            speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
            omitDeletionAnimation={true}
            style={{
                fontSize: '7em',
                minHeight: '100px',
                lineHeight: '2',
                color: 'var(--dark-pink)',
                textAlign: 'center',
            }}
            />
        )}
            <p className={styles.scrollSection}> Scroll Down ↓ </p>
        </div>
    );
}
