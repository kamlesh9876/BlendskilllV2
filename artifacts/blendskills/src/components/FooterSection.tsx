import React from 'react';
import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <p>© 2026 Blendskills. All rights reserved.</p>
      </div>
    </footer>
  );
}
