import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { text: "If Curious George and the cat from “curiosity killed the cat” went on an adventure ...", color: "#E5004B" },
  { text: "What role would a DESIGNER play in this journey?", color: "#E45176" },
  { text: "Video Editor", color: "#3357FF" },
  { text: "Brand Strategist", color: "#FF33A1" }
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const index = Math.min(
        Math.floor(window.scrollY / sectionHeight),
        sections.length - 1
      );
      setCurrentIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      if (i < sections[currentIndex].text.length) {
        setDisplayText((prev) => prev + sections[currentIndex].text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <motion.div
      className="h-screen w-full flex justify-center items-center text-white text-4xl font-bold text-center px-4"
      animate={{ backgroundColor: sections[currentIndex].color }}
      transition={{ duration: 0.5 }}
    >
      <span>{displayText}</span>
    </motion.div>
  );
}
