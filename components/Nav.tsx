'use client';

import { useState } from 'react';
import styles from './Nav.module.css';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} aria-label="Tifex home">
          Tifex<span className={styles.dot}>.</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-accent">
            Start a project
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className={open ? styles.barOpenTop : styles.bar} />
          <span className={open ? styles.barOpenBottom : styles.bar} />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-accent"
            onClick={() => setOpen(false)}
            style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}