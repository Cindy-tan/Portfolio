'use client';
import styles from "./page.module.css";
import React from "react";
import ScreenOne from "../../Components/ScreenOne/ScreenOne.js";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo.js";
import ScreenThree from "../../Components/ScreenThree/ScreenThree.js";

// pages/about.js or any page
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Your Site</title>
      </Head>
      <h1>About Us</h1>
      <p>Some content about your site.</p>
    </>
  );
};

export default AboutPage;


export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <section className={styles.screenOneContainer}>
              <ScreenOne/>
            </section>
            <section className={styles.screenTwoContainer}>
              <ScreenTwo/>
            </section>
            <section className={styles.screenTwoContainer}>
              <ScreenThree/>
            </section>
            
          </main>
    </>
    
  );
}
