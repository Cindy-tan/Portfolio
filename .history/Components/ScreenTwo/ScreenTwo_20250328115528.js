import React from "react";
import styles from "./page.module.css";
import ScreenOne from "../../Components/ScreenOne/ScreenOne.js";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo.js";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.screenOneContainer}>
          <ScreenOne />
        </section>
        <section className={styles.screenTwoContainer}>
          <ScreenTwo />
        </section>
      </main>
    </>
  );
}
