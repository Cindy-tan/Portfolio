'use client';
import styles from "./page.module.css";
import TypeWritting from "../../Components/S";
import { useState, useEffect } from 'react'


export default function Home() {
  return (
    <>
          <main className={styles.main}>
            <TypeWritting/>
          </main>
    </>
    
  );
}
