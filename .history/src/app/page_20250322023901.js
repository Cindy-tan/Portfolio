'use client'
import styles from "./page.module.css";
import TypeWritting from "../../Components/Typewritting/typewritting";

export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <TypeWritting/>
          </main>
    </>
    
  );
}
