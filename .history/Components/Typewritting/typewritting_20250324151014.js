import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// If you want to use CSS variables, define it in your CSS
// :root { --dark-pink: #E5004B; }

const sections = [
  { text: "If Curious George and the cat from “curiosity killed the cat” went on an adventure ...", color: "var(--dark-pink)" },
  { text: "What role would a DESIGNER play in this journey?", color: "#E45176" },
  { text: "As designers, we are like Curious George—constantly exploring new challenges and learning from our mistakes. We might fall into the cats trap, but we are never stuck. There's always someone cheering us on, reminding us to trust ourselves, stay confident, and trust the process.", color: "#E45176" },
  { text: "Hi there ✌🏻 :)", color: "#FA5274" }
];

<TypeAnimation
splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
sequence={[
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  3000,
  '',
]}
speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
omitDeletionAnimation={true}
style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
repeat={Infinity}
/>