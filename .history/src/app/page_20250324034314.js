'use client';
import styles from "./page.module.css";
import LandingPage from "../../Components/LandingPage/LandingPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  );
}

