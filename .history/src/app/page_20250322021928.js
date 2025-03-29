import Image from "next/image";
import styles from "./page.module.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const TypeWritting = () => {

    return (
      <>
        <main className={styles.main}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'We produce food for Mice',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We produce food for Hamsters',
                1000,
                'We produce food for Guinea Pigs',
                1000,
                'We produce food for Chinchillas',
                1000
              ]}
            />      
        </main>
      </>
    );
  }
}
