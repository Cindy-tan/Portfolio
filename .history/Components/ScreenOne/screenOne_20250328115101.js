import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../ScreenOne/ScreenOne.module.css";

export default function ScreenOne() {
    return (
    <div className={styles.container}>
        <TypeAnimation
            splitter={(str) => str.split(/(?= )/)} 
            sequence={[
                "Hi there ✌🏻:)",
                3000,
            ]}
            speed={{ type: 'keyStrokeDelayInMs', value: 300 }} // This adjusts typing speed
            omitDeletionAnimation={true} // This keeps the text without deleting it, once its typed it typed
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