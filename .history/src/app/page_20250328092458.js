'use client';
import styles from "./page.module.css";
import React from "react";
import { useState, useEffect } from 'react'
import ScreenOne from "../../Components/ScreenOne/ScreenOne";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo";


export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <div className={styles.screenOneContainer}>
              <ScreenOne/>
            </div>
            <div className={styles.screenOneContainer}>
              <ScreenTwo/>
            </div>
            
          </main>
    </>
    
  );
}
