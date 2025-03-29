import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewritting.module.css";

export default function TypeWritting() {
    return (
    <div className={styles.container}>
        <TypeAnimation
            splitter={(str) => str.split(/(?= )/)} // Split by space
            sequence={[
            'If Curious George and the cat from “curiosity killed the cat” went on an adventure ...',
            3000, // Pause after the text

            ]}
            speed={{ type: 'keyStrokeDelayInMs', value: 120 }} // Adjust typing speed
            omitDeletionAnimation={true} // Keeps the text without deleting it
            style={{
            fontSize: '1.2em', // Adjust the font size if necessary
            display: 'block',
            minHeight: '200px',
            lineHeight: '1.5', // Optional: Adjust line spacing for readability
            }}
            repeat={Infinity} // Infinite loop
            />
        </div>
    );
}
