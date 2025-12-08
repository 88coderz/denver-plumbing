'use client';

import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <Link href="/terms-of-use" className={styles.footerLink}>Terms of Use</Link>
        <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
        <Link href="/cookie-policy" className={styles.footerLink}>Cookie Policy</Link>
        <Link href="/copyright-notice" className={styles.footerLink}>Copyright Notice</Link>
      </div>
      <p className={styles.footerText}>&copy; {new Date().getFullYear()} Plumbing Co. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
