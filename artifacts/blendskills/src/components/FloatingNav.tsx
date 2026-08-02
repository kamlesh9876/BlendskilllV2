import React from 'react';
import styles from './NavBar.module.css';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Stats', href: '#stats' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#footer' },
];

export default function FloatingNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.href} className={styles.item}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
