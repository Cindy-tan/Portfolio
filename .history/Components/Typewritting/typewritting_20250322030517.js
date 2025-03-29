import React, { useEffect, useState } from "react";
import styles from "./typewritting.module.css";

export default function TypeWritting() {
  const [text, setText] = useState(""); // State to manage typed text

  useEffect(() => {
    const sentence = "If Curious George and the cat from “curiosity killed the cat” went on an adventure ...";
    let index = 0;
    
    const interval = setInterval(() => {
      setText((prevText) => prevText + sentence[index]);
      index += 1;
      if (index === sentence.length) {
        clearInterval(interval);
      }
    }, 120); // Typing speed

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className={styles.container}>
      <p style={{ fontSize: "3em", lineHeight: "2.3", textAlign: "center", margin: "auto 5em" }}>
        {text.slice(0, 2)} {/* "If " */}
        <span className={styles.boldText}>{text.slice(2, 18)}</span> {/* "Curious George" in bold */}
        {text.slice(18)} {/* Rest of the sentence */}
      </p>
    </div>
  );
}
