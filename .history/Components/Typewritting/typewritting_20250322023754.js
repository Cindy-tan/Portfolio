import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewritting.module.css";

export default function TypeWritting() {
  return (
    <div className={styles.container}>
      <TypeAnimation
        splitter={(str) => str.split(/(?= )/)} // Split by space
        sequence={[
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          3000, // Pause after the text
          ' ', // Empty string creates a break between loops
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 30 }} // Adjust typing speed
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
