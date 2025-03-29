'use client';
import styles from "./page.module.css";
import TypeWritting from "../../Components/Typewritting/typewritting";

<head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
</style>
</head>

export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <TypeWritting/>
          </main>
    </>
    
  );
}
