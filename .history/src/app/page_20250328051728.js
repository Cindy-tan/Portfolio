'use client';
import styles from "./page.module.css";
import TypeWritting from "../../Components/ScreenOne/ScreenOne.js";

import React from "react";
import { useState, useEffect } from 'react'
import ScreenOne from "../../Components/ScreenOne/ScreenOne.js";


export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <ScreenOne/>
          </main>
    </>
    
  );
}
