import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./typewritting.module.css";

const sentences = [
    { text: "If Curious George and the cat from 'curiosity killed the cat' went on an adventure ...", color: "#1e1e1e" },
    { text: "Would they discover the meaning of curiosity?", color: "#ff5733" },
    { text: "Or would they rewrite the story altogether?", color: "#4287f5" },
    { text: "Maybe curiosity is just the beginning...", color: "#34d399" }
];

export default function TypeWritting() {
    const [index, setIndex] = useState(0);
    const [bgColor, setBgColor] = useState(sentences[0].color);
    const scrollRef = useRef(0); // Prevents excessive re-renders

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = document.documentElement.scrollTop; // More reliable
            const sectionHeight = window.innerHeight;
            const newIndex = Math.min(Math.floor(scrollPosition / sectionHeight), sentences.length - 1);

            if (newIndex !== scrollRef.current) {
                scrollRef.current = newIndex; // Store latest scroll position
                setIndex(newIndex);
                setBgColor(sentences[newIndex].color);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div 
            className={styles.container} 
            style={{
                backgroundColor: bgColor,
                transition: "background-color 0.8s ease-in-out",
                height: "100vh", // Full screen height
                display: "flex", // Centers content
                alignItems: "center", // Vertical centering
                justifyContent: "center", // Horizontal centering
                textAlign: "center",
                padding: "2em"
            }}
        >
            <TypeAnimation
                key={index} // Forces re-render when index changes
                sequence={[sentences[index].text, 3000]}
                speed={150}
                omitDeletionAnimation={true}
                style={{
                    fontSize: "2.5em",
                    lineHeight: "1.5",
                    color: "#fff",
                    maxWidth: "80%", // Keeps text readable
                }}
            />
        </div>
    );
}
