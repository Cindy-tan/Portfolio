import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        const handleScroll = () => {
            const newIndex = Math.min(
                Math.floor(window.scrollY / window.innerHeight),
                sentences.length - 1
            );
            if (newIndex !== index) {
                setIndex(newIndex);
                setBgColor(sentences[newIndex].color);
            }
        };

        window.add
