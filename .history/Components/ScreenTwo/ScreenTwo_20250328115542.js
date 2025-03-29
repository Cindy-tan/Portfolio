import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./ScreenTwo.module.css";

export default function ScreenTwo() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if ScreenTwo is in view
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Trigger typing animation when in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Target the screenTwoContainer
    const section = document.querySelector(`.${styles.screenTwoContainer}`);
    observer.observe(section);

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      {inView && (
        <TypeAnimation
          splitter={(str) => str.split(/(?= )/)}
          sequence={["I am Cindy Tan ...", 3000]}
          speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
          omitDeletionAnimation={true}
          style={{
            fontSize: '3em',
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
