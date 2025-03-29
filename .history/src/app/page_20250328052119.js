'use client';
import styles from "./page.module.css";
import React from "react";
import { useState, useEffect } from 'react'
import ScreenOne from "../../Components/ScreenOne/ScreenOne.js";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo.js";


export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <div className="">
              <ScreenOne/>
            </div>
            <div>
              <ScreenTwo/>
            </div>
            
          </main>
    </>
    
  );
}
