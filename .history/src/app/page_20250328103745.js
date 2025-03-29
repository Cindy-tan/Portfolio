'use client';
import styles from "./page.module.css";
import React from "react";
import { useState, useEffect } from 'react'
import ScreenOne from "../../Components/ScreenOne/ScreenOne.js";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo.js";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel");
const container = document.querySelector('.container');


// Setting the initial background color
//gsap.set(container, {
//  backgroundColor: 'lightblue',
//})


const tl = gsap.timeline({
  
    scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: () => `+=${container.offsetWidth}`
      
  }
  
})

 tl
 .to(sections, { duration: 2, xPercent: -100 * (sections.length - 1), ease: "none" })
 .to(container, { duration: 1, backgroundColor: '#FF0000', ease: "none" }, 0)
 .to(container, { duration: 1, backgroundColor: '#0000FF', ease: "none" }, 1)