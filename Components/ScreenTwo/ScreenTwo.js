import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./ScreenTwo.module.css";

export default function ScreenTwo() {
    const [inView, setInView] = useState(false);
    const screenTwoRef = useRef(null); 

    useEffect(() => {
        if (screenTwoRef.current) {
        const observer = new IntersectionObserver(
            (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setInView(true); // Start animation and changed background color when the section is in view
            }
            },
            { threshold: 0.5 } // This triggers/activates when 50% of the section is visible
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
            sequence={["I am Cindy Tan ...", 3000]}
            speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
            omitDeletionAnimation={true}
            style={{
                fontSize: '7em',
                minHeight: '100px',
                lineHeight: '2',
                color: '#fff',
                textAlign: 'center',
            }}
            />
        )}
            <p className={styles.scrollSection}> Scroll Down ↓ </p>
        </div>
    );
}
