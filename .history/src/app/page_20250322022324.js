import styles from "./page.module.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className={styles.main}>
      <TypeWritting />
    </main>
  );
}

const TypeWritting = () => {
  return (
    <TypeAnimation
      sequence={[
        "We produce food for Mice",
        1000,
        "We produce food for Hamsters",
        1000,
        "We produce food for Guinea Pigs",
        1000,
        "We produce food for Chinchillas",
        1000,
      ]}
      wrapper="span"  // Ensures text wraps properly
      speed={50}      // Adjusts typing speed
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity} // Ensures infinite looping
    />
  );
};
