import React, { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./ScreenThree.module.css";

export default function ScreenTwo() {
    const [inView, setInView] = useState(false);
    const screenTwoRef = useRef(null); // Use a ref to target the element

    useEffect(() => {
        // Check if the ref is attached to a DOM element
        if (screenTwoRef.current) {
        const observer = new IntersectionObserver(
            (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setInView(true); // Start animation and background color change when section is in view
            }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        // Observe the section
        observer.observe(screenTwoRef.current);

        // Clean up observer on unmount
        return () => {
            observer.disconnect();
        };
        }
    }, []);

    return (
        <div
        ref={screenTwoRef}
        className={`${styles.container} ${inView ? styles.activeSection : ""}`} // Add the activeSection class when in view
        >
        {inView && (
            <TypeAnimation
            splitter={(str) => str.split(/(?= )/)}
            sequence={["I am Cindy Tan ...", 3000]}
            speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
            omitDeletionAnimation={true}
            style={{
                fontSize: '5em',
                minHeight: '200px',
                lineHeight: '2',
                color: '#fff',
                textAlign: 'center',
            }}
            />
        )}
        </div>
    );
}
