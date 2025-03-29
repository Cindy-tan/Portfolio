import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewritting.module.css";
import { useState, useEffect } from 'react'

export default function TypeWritting() {
    return (
    <div className={styles.container}>
        <TypeAnimation
            splitter={(str) => str.split(/(?= )/)} // Split by space
            sequence={[
            "If Curious George and the cat from “curiosity killed the cat” went on an adventure ...",
            3000, 
            "As designers, we’re like Curious George—constantly exploring new challenges and learning from our mistakes. We might fall into the cat’s trap, but we’re never stuck. 

            There's always someone cheering us on, reminding us to trust ourselves, stay confident, and trust the process.",
            1000,
            "We produce food for Guinea Pigs",
            1000,
            "We produce food for Chinchillas",
            1000,
            ]}
            speed={{ type: 'keyStrokeDelayInMs', value: 150 }} // This adjusts typing speed
            omitDeletionAnimation={true} // This keeps the text without deleting it
            style={{
                margin: 'auto 5em',
                align: 'center',
                display: 'block',
                fontSize: '3em', 
                minHeight: '200px',
                lineHeight: '2', // Line height is too add line spacing for readability
                color: '#fff',
            }}
            />
        </div>
    );
}