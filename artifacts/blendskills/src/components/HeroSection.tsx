import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Blendskills</h1>
        <p className={styles.tagline}>Crafting immersive digital experiences</p>
        <button className={styles.cta}>Explore</button>
      </div>
    </section>
  );
}
