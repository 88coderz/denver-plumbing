'use client';

import React, { useState, useEffect } from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      window.location.href = 'tel:1-720-500-2531'; 
    }
  };

  return (
    <div className={styles.ctaContainer}>
      <h2 className={styles.ctaTitle}>Ready to get started?</h2>
      <p className={styles.ctaSubtitle}>Contact us today for a free estimate on your plumbing needs.</p>
      <a
        href={isMobile ? '#' : "https://www.google.com/maps/place/Colorado+Plumbing+Solutions/@39.6631365,-104.8964855,87342m/data=!3m2!1e3!4b1!4m6!3m5!1s0x876c7e3c00000001:0x7f4e78531d818589!8m2!3d39.6631366!4d-104.8964855!16s%2Fg%2F11b774c2sb?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"}
        target={isMobile ? '_self' : "_blank"}
        rel={isMobile ? '' : "noopener noreferrer"}
        onClick={isMobile ? handleButtonClick : undefined}
        className={styles.ctaButton}
      >
        Get a Free Estimate
      </a>
    </div>
  );
};

export default CallToAction;
