import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewritting.module.css";

export default function TypeWritting() {
    return (
    <div className={styles.container}>
        <TypeAnimation
            sequence={[
                "If Curious George and the cat from “curiosity killed the cat” went on an adventure ...",
                1000,
            ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
        />
    </div>
    );
}
