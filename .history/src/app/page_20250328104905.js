'use client';
import styles from "./page.module.css";
import React from "react";
import { useState, useEffect } from 'react'
import ScreenOne from "../../cScreenOne";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo.js";


export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <section className={styles.screenOneContainer}>
              <ScreenOne/>
            </section>
            {/* <section className={styles.screenTwoContainer}>
              <ScreenTwo/>
            </section> */}
            
          </main>
    </>
    
  );
}
