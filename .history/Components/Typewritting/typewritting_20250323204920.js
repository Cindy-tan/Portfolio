import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewritting.module.css";

const sentences = [
    { text: "If Curious George and the cat from 'curiosity killed the cat' went on an adventure ...", color: "var" },
    { text: "Would they discover the meaning of curiosity?", color: "#ff5733" },
    { text: "Or would they rewrite the story altogether?", color: "#4287f5" },
    { text: "Maybe curiosity is just the beginning...", color: "#34d399" }
];

export default function TypeWritting() {
    const [index, setIndex] = useState(0);
    const [bgColor, setBgColor] = useState(sentences[0].color);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sectionHeight = window.innerHeight;
            const newIndex = Math.min(Math.floor(scrollPosition / sectionHeight), sentences.length - 1);

            if (newIndex !== index) {
                setIndex(() => newIndex); // Functional state update
                setBgColor(() => sentences[newIndex].color);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [index]); // Keep index in dependency array to fix warning

    return (
        <div 
            className={styles.container} 
            style={{ backgroundColor: bgColor, transition: "background-color 0.8s ease-in-out", height: "100vh" }}
        >
            <TypeAnimation
                key={index} // Forces re-render when index changes
                sequence={[sentences[index].text, 3000]}
                speed={150}
                omitDeletionAnimation={true}
                style={{
                    margin: "auto 5em",
                    textAlign: "center",
                    display: "block",
                    fontSize: "3em",
                    minHeight: "200px",
                    lineHeight: "2",
                    color: "#fff",
                }}
            />
        </div>
    );
}

